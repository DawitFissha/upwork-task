const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
function generateRandomString() {

    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < 12; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    
    return result;
}

chrome.runtime.onInstalled.addListener(function(details) {
    if (details.reason === "install") {
      chrome.windows.create({
        url: "index.html",
        type: "popup",
        width: 600,
        height: 600
      });
    }
    chrome.storage.sync.set({ signup:false})
  });
// chrome.storage.sync.get(["signup"]).then(result=>console.log(result.signup))
  
  chrome.runtime.onMessage.addListener(async function(request, sender, sendResponse) {
    const {data} = request
    if(data.type === 'signup'){
        const existingData = await chrome.storage.sync.get(["signup"])
        if(existingData) await chrome.storage.sync.remove(['signup'])
        chrome.storage.sync.set({ signup: data.value }).then(() => {
            console.log("Value is set to " + data.value);
          });
    }
    else if(data.type === 'user'){
        const existingData = await chrome.storage.sync.get(["user"])
        if(existingData) await chrome.storage.sync.remove(['user'])
        chrome.storage.sync.set({ user: {...data.authInfo,secret:generateRandomString()} }).then(() => {
            console.log("Value is set to " + data);
          });
    }
  });
  chrome.storage.onChanged.addListener(async ()=>{
    setTimeout(async () => {
        await chrome.runtime.sendMessage({message:'storage changed'})
    }, 3000);
  })