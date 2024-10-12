import { companyLogos } from "../../constant"

const CompanyLogo = ({className}) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-n-1/50 text-center">
      Empowering Clients, Achieving Excellence Together
      </h5>
      <ul className="flex"> {companyLogos.map((logo, index) => (
        <li className="flex items-center justify-center flex-1 h-[8.5rem]" key={index}>
            <img src={logo} height={28} width={134} alt={logo} />
        </li>
      ))}</ul>
    </div>
  )
}

export default CompanyLogo
