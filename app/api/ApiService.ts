// services/api.ts
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

class ApiService {

  private axiosInstance: AxiosInstance
  private static instance: ApiService

  private constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL,
      timeout: 10000, 
      headers: {
        'Content-Type': 'application/json',
      },
    })

  }

  
 public async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.post(url, data, config)
    return response.data
  }


}

export default ApiService