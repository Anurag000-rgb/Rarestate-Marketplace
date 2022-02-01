import Styles from "../styles/Login.module.css"
import { useMoralis} from 'react-moralis';

export default function newUser() {
  const {authenticate, authError} = useMoralis();



  return (
    
      <div className={Styles.login_container}>
        <div className={Styles.login_card}>
          <div className={Styles.login_button}>
            <p className={Styles.login_title}>Login with your Metamask</p>
            {
              authError && <p className={Styles.error}>
                {authError.name}
                {authError.message}
              </p>
            }
            <button onClick={authenticate}>Sign In</button>
          </div>
          <a href="">Continue To Rarestate Broker Potal</a>
        </div>
      </div>
    
  )
}
//<Image src={BgImg}/>
// <MoralisProvider appId='KfL79qAhALKn6pc2JXnZmc6gdkJLpijOVJjHwKZc' 
//serverUrl="https://2zinzaq7qxtl.usemoralis.com:2053/server" >