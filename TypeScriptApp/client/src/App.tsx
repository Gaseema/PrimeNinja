import React, { useEffect, useState } from 'react'
import { LeadersItem, AddLeader, Intro, LevelOne, Navigation } from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { getLeaders, addLeader } from './API'

const App: React.FC = () => {
  const [leaders, setLeaders] = useState<ILeadersBoard[]>([])

  useEffect(() => {
    fetchLeaders()
  }, [])

  const fetchLeaders = (): void => {
    getLeaders()
      .then(({ data: { leaders } }: ILeadersBoard[] | any) => setLeaders(leaders))
      .catch((err: Error) => console.log(err))
  }
  const handleSaveLeader = (e: React.FormEvent, formData: ILeadersBoard): void => {
    e.preventDefault()
    addLeader(formData)
      .then(({ status, data }) => {
        if (status !== 201) {
          throw new Error("Error! Leader not saved")
        }
        setLeaders(data.leaders)
      })
      .catch(err => console.log(err))
  }

  return (
    <main className='App'>
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Intro />} />
          <div className='gameDiv background'>
            <div className='centeredDiv'>
              <Router>
                <Navigation />
                <Switch>
                  <Route path="/level-one" component={() => <LevelOne />} />
                  <Route path="/level-two">
                    <h1>All Leaders</h1>
                    <AddLeader saveLeader={handleSaveLeader} />
                    {leaders.map((leader: ILeadersBoard) => (
                      <LeadersItem
                        key={leader._id}
                        leader={leader}
                      />
                    ))}
                  </Route>
                </Switch>
              </Router>
            </div>
          </div>
        </Switch>
      </Router>
    </main>
  )
}

export default App