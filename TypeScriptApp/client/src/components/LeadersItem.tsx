import React from "react"
type Props = LeadersProps & {
  
}
const Leader: React.FC<Props> = ({ leader }) => {
  return (
    <div className="Card">
      <div className="Card--text">
        <h1 className={'checkLeader'}>{leader.name}</h1>
        <span className={'checkLeader'}>{leader.score}</span>
      </div>
    </div>
  )
}

export default Leader 