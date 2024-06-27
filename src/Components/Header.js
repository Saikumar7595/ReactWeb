import React from 'react';
import{Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
function Header() {
  return (
    <div>
      <div className='bll'>

<ul>
<Link to ="/ReactWeb"><li>HOME</li></Link><br/><br/>
<Link to ="/About"><li>ABOUT</li></Link><br/><br/>
<Link to ="/Services"><li>SERVICES</li></Link><br/><br/>
<Link to ="/Contact"><li>CONTACT</li></Link><br/><br/>

</ul>
</div>


    </div>
  );
}

export default Header;