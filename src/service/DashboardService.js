import axios from 'axios'
import api from './api'
export class DashbaordService {
    
    fetchOrderStats() {
        return api.post(process.env.REACT_APP_BIRDEYE_URL);
    }

}