import React from 'react';
function Header(){

return(
<header style={HeaderStyle}>


<h1>TODO LIST</h1>


</header>
)
}
const HeaderStyle={
    paddingTop:'20px',
    height:'100px',
    background:'#333',
    color:'#fff',
    textAlign:'center',

}
export default Header;