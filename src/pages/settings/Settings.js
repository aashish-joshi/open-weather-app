import './settings.scss';
import { useState, useEffect } from "react";

const Settings = () => {
    const [apiKey, setApiKey] = useState('');
    const setKey = (e) => {
        e.preventDefault();
        const apiKey = e.target[1].value;
        setApiKey(apiKey);
        document.getElementById('apiKeyInput').textContent = '';
        window.localStorage.setItem('api-key',apiKey)
    }

    const getApiKeyFromStorage = () => {
        const apiKey = window.localStorage.getItem('api-key');
        if(apiKey){
            setApiKey(apiKey)
        }
    }

    useEffect(() => {
        document.getElementById('apiKeyDisplay').textContent = apiKey;
    })
    
    return ( 
        <div className="container">
            <h2>Settings</h2>
            <form onLoad={getApiKeyFromStorage} onSubmit={(e) => setKey(e)}>
                <label htmlFor="apiKeyDisplay">Status</label>
                <input type="text" name="apiKeyDisplay" id="apiKeyDisplay" disabled value={apiKey}/>
                <label className="input-label" htmlFor="apiKeyInput">API Key</label>
                <input type="text" name="apiKeyInput" id="apiKeyInput" />
                <button type="submit"><i className="fa-solid fa-floppy-disk"></i></button>
            </form>
        </div>
     );
}
 
export default Settings;
