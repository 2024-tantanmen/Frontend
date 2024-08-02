import { baseUrl } from "../../../shared/config/baseurl";

export const fetchPrevChattings = async (setChattings, roomId) => {
    const token = window.sessionStorage.getItem('token')
    
    try {
        const response = await fetch(`${baseUrl}/api/chat/rooms/25/messages`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error(`에러: ${response.status}`);
        }

        const data = await response.json();
        console.log(data.result)    
        // setChattings(data.result)
        
    } catch (error) {
        console.error(error);
    }
};