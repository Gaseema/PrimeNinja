import React, { useEffect ,useState } from 'react'
import { Link, useHistory } from "react-router-dom";


const Navigation: React.FC = () => {
  const [query, setQuery] = useState(''); // Update curent URL value
  const history = useHistory(); // Track URL on change

  useEffect(() => {
    setQuery('/level-one'); // Set the default URL
    return history.listen((location) => {
      setQuery(location.pathname); // Update URL on change
    })
  }, [history])
  
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <p className="navbar-brand">PrimeNinja</p>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className={`nav-item  ${query === "/level-one" ? "active" : ""}`}>
                <Link className="nav-link" to="/level-one"> Level 1
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className={`nav-item  ${query === "/level-two" ? "active" : ""}`}>
                <Link className="nav-link" to="/level-two"> Level 2</Link>
              </li>
              <li className={`nav-item  ${query === "/level-three" ? "active" : ""}`}>
                <Link className="nav-link" to="/level-three">Level 3</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navigation