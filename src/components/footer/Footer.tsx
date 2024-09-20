import { menuList, quickLinks } from "./lists";
import Location from "./Location";

const Footer = () => {
  return (
    <footer className="bg-light p-10 text-dark max-md:px-5 max-sm:px-2">
      <section className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:place-items-center gap-5">
        <Location />
        <div>
          <h5 className="text-xl font-medium">Menu</h5>
          <ul className="mt-3 space-y-1">
            {menuList.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer transition hover:text-secondary"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="text-xl font-medium">Quick Links</h5>
          <ul className="mt-3 space-y-1">
            {quickLinks.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer transition hover:text-secondary"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="text-xl font-medium">Operational</h5>
          <ul className="mt-3 space-y-1">
            <li>Every day:9:00 - 23:00</li>
            <li>Sat - Sun:10:00 - 22:00</li>
          </ul>
        </div>
      </section>

      {/* Copyright */}
      <p className="text-center mt-5 font-medium">Copyright &copy; EliteGym. All rights reserved</p>
    </footer>
  );
};

export default Footer;
