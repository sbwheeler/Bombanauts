import React, {Component} from 'react'
import store from '../redux/store';
import { delay } from '../game/utils';

export class Scores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: {},
      ownInfo: {}
    }
  }

  componentDidMount() {
    delay(100)
    .then(() => {
      let storeState = store.getState()
      this.setState({
        players: storeState.players,
        ownInfo: storeState.ownInfo
      })
    })
  }

  render() {
    let ownInfo = this.state.ownInfo;
    let players = this.state.players;
    let playersIds = Object.keys(players)
    let playersRows = playersIds.map( playerId => {
      return players[playerId];
    });
    playersRows.push(ownInfo)

    playersRows.sort( ( playerA, playerB ) => playerA.score - playerB.score)
    return (
        <div id='scores'>
          <ul id='scoreslist'>
          <li><h3>Score:</h3></li>
          <hr />
            {
              playersRows.length && playersRows.map( (playersRow, index) => {
                return <div>
                  <li key={`${index}`}>{`${playersRow.nickname}:   ${playersRow.score}`}</li>
                  </div>
              })
            }
          </ul>
        </div>
    )
  }
}
