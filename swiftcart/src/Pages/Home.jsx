import Bannercart from "../Components/banner/bannercrt"
import Bottomnav from "../Components/btmnavi/btmnavi"
import Prodsam from "../Components/shopwrk/prodpg"
import Subbanner from "../Components/subbanner/subbanner"

function Home(){
    return(
        <>
        <Bannercart/>
        <Bottomnav/>
        <Prodsam/>
        <Subbanner/>
        </>
    )
}

export default Home