interface ILeadersBoard {
  _id: string
  name: string
  score: SVGAnimatedNumberList
  createdAt?: string
}

interface LeadersProps {
  leader: ILeadersBoard
}

type ApiDataType = {
  message: string
  status: string
  leaders: ILeadersBoard[]
  leader?: ILeadersBoard
}