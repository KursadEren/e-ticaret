import { moneyFormat } from "./helpers"
function Header({total,money}){
    return(
        <>
          <div className="header">
              Harcamak için  <span> {moneyFormat(money-total)}$</span> paranız var
          </div>
          <style jsx>{`
              .header{
                position:sticky;
                top:0;
                background: linear-gradient(to bottom,#20b820,#14be2a);
                height:60px;
                display:flex;
                align-items:center;
                justify-content:center;
                color:#fff;
                font-size:24px;
                letter-spacing:1px;
             }`}
          </style>
        </>
       
    )
}
export default Header