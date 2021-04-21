import axios, { AxiosResponse } from "axios"

const baseUrl: string = "http://localhost:4000"

export const getLeaders = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const leaders: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl + "/leaders-board"
    )
    return leaders
  } catch (error) {
    throw new Error(error)
  }
}

export const addLeader = async (
  formData: ILeadersBoard
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const leader: Omit<ILeadersBoard, "_id"> = {
      name: formData.name,
      score: formData.score,
    }
    const saveLeader: AxiosResponse<ApiDataType> = await axios.post(
      baseUrl + "/add-leader",
      leader
    )
    return saveLeader
  } catch (error) {
    throw new Error(error)
  }
}