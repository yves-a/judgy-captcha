import { useEffect, useState } from "react";
import { Check, X, RefreshCw, Info } from "lucide-react";
interface ImageUrlsResponse {
    image_urls: string[];
}

const getImageUrls = async (): Promise<ImageUrlsResponse> => {
    const response = await 
    fetch("http://127.0.0.1:5000/get-image-urls", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    return (await response.json()) as ImageUrlsResponse;
}
    
export default function JudgyCaptcha() {
  const [selected, setSelected] = useState(Array(9).fill(false));
  const [verified, setVerified] = useState(false);
  const [failed, setFailed] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  useEffect(() => {
    const fetchImageUrls = async () => {
        const urls = await getImageUrls();
        setImageUrls(urls.image_urls);
        console.log(urls);
    };
    fetchImageUrls();
    }, []);


  const captchaPrompt = "Pick the most emotionally available frog";
  
  // Will get this from the server in a real-world scenario
  const judgingAnimals = 1;
  
  const toggleSelect = (index: number) => {
    if (verified || failed) return;
    const newSelected = Array(9).fill(false);
    newSelected[index] = true;
    setSelected(newSelected);
  };
  
  const verifySelection = () => {
    const correctSelection = selected.every((isSelected, index) => 
      ((judgingAnimals === index) && isSelected) || 
      ((judgingAnimals !== index) && !isSelected)
    );
    
    if (correctSelection) {
      setVerified(true);
      setFailed(false);
    } else {
      setFailed(true);
      setVerified(false);
    }
  };
  
  const resetCaptcha = () => {
    setSelected(Array(9).fill(false));
    setVerified(false);
    setFailed(false);
  };
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-purple-600 p-6 text-center">
          <h1 className="text-3xl font-bold text-white">Judgy Captcha</h1>
          <p className="text-purple-200 mt-2">Because regular CAPTCHAs aren't judgy enough</p>
        </div>
        
        <div className="p-6">
          {/* Prompt */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-gray-800">{captchaPrompt}</h2>
            <button 
              onClick={() => setShowInfo(!showInfo)} 
              className="text-gray-500 hover:text-purple-600"
            >
              <Info size={20} />
            </button>
          </div>
          
          {/* Info tooltip */}
          {showInfo && (
            <div className="bg-gray-100 p-3 rounded-lg mb-4 text-sm text-gray-700">
              This isn't merely a verification of your humanity; it's an ontological audit of your capacity to anthropomorphize non-human sentients based on projected emotional subtext and inferred boundary-setting behaviors. Please proceed accordingly, assuming the frogs have backstories.
            </div>
          )}
          
          {/* Grid of images */}
          {imageUrls.length === 0 || imageUrls === undefined ? (
            <p>Loading...</p>
          ) : (
          <div className="grid grid-cols-3 gap-2 mb-6">
            {imageUrls.map((url, index) => (
              <div 
                key={index}
                onClick={() => toggleSelect(index)}
                className={`aspect-square bg-gray-200 rounded-lg overflow-hidden relative cursor-pointer
                  ${selected[index] ? 'ring-2 ring-purple-600' : ''}
                  ${verified || failed ? 'pointer-events-none' : ''}
                `}
              >
                <img 
                  src={`${imageUrls[index]}`} 
                  alt={`Animal ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                {selected[index] && (
                  <div className="absolute top-2 right-2 bg-purple-600 rounded-full p-1">
                    <Check size={16} className="text-white" />
                  </div>
                )}
              </div>
            ))}
          </div>
          )}
          {/* Verification status */}
          {verified && (
            <div className="bg-green-100 border border-green-300 rounded-lg p-3 flex items-center mb-4">
              <Check size={20} className="text-green-600 mr-2" />
              <p className="text-green-800">
                Verified! Your animal judgment skills are impeccable.
              </p>
            </div>
          )}
          
          {failed && (
            <div className="bg-red-100 border border-red-300 rounded-lg p-3 flex items-center mb-4">
              <X size={20} className="text-red-600 mr-2" />
              <p className="text-red-800">
                Failed! The animals are judging you even harder now.
              </p>
            </div>
          )}
          
          {/* Buttons */}
          <div className="flex space-x-3">
            <button
              onClick={verifySelection}
              disabled={verified}
              className={`flex-1 py-2 px-4 rounded-lg font-medium 
                ${verified 
                  ? 'text-gray-500 cursor-not-allowed' 
                  : 'hover:bg-purple-700 text-white'
                }
              `}
              style = {{ backgroundColor: verified ? '#e5e7eb' : '#9810fa' }}
            >
              Verify
            </button>
            
            <button
              onClick={resetCaptcha}
              className="py-2 px-4 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 font-medium flex items-center justify-center"
            >
              <RefreshCw size={16} className="mr-2" />
              New Challenge
            </button>
          </div>
        </div>
        
        <div className="bg-gray-50 px-6 py-3 text-center text-xs text-gray-500">
          Judgy Captcha™ | Because security shouldn't be boring
        </div>
      </div>
    </div>
  );
}