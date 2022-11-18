import logo from '../../assets/img/logo.png';

export default function Topbar() {
    return (
        <div 
        style={{
            backgroundColor:"#9F2042",
            color:"white",
            height:"60px",
            marginBottom:"20px",
            display:"flex",
            flexDirection:"row",
        }}>
            <img 
                src={logo} 
                alt="logo de momo le bg" 
                style={{ 
                    transform:"scale(0.8)",
                    cursor:"pointer"
                }} 
                onClick={() => window.location.href=""} 
            />
        </div>
    )
}