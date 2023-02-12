import { footerList } from '../constants';

const Footer = () => {
  return (
    <div className="xl:max-w-[1300px] mx-auto">
      <div className="container mx-auto">
        <div className="mx-auto flex flex-wrap justify-between items-start py-10">
          {footerList.map((footerItem) => {
            return (
              <div key={footerItem.key} className=" px-4 w-1/4">
                <div className="font-semibold uppercase text-sm">
                  <p>{footerItem.label}</p>
                </div>
                <div className="mt-3">
                  {footerItem.categoryList.map((item, i) => (
                    <div
                      key={i}
                      className="uppercase text-gray-600 leading-6 text-xs hover:underline hover:decoration-[#E72A6E] hover:underline-offset-2 "
                    >
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
