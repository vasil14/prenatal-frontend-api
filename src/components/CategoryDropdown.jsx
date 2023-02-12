import { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import ProductContext from '../Context/ProductContext';

const CategoryDropdown = ({ categoryName }) => {
  const { categoryChildren, getCategoriesWithChildren, closeCategory } =
    useContext(ProductContext);

  useEffect(() => {
    getCategoriesWithChildren(categoryName);
  }, [categoryName]);

  return (
    <div className="relative drop-shadow-xl z-40 ">
      <div className="bg-white shadow absolute left-0 w-full">
        <div className="xl:max-w-[1300px] mx-auto">
          <div className="container mx-auto">
            <div className="flex -ml-10 flex-grow flex-shrink flex-wrap  w-3/4 ">
              {categoryChildren[0]?.children?.map((sub_1) => (
                <div key={sub_1.id} className="py-8 pl-10 space-y-3 w-1/4">
                  <Link
                    to={
                      '/products/' +
                      categoryName.replaceAll(' ', '-').toLowerCase() +
                      '/' +
                      sub_1.name.replaceAll(' ', '-').toLowerCase()
                    }
                  >
                    <h1
                      className="font-bold text-[16px] mb-[20px] text-black"
                      onClick={closeCategory}
                    >
                      {sub_1.name.toUpperCase()}
                    </h1>
                  </Link>
                  <div className="space-y-3.5">
                    {sub_1?.children?.map((sub_2, i) => (
                      <div key={i} className="space-y-3.5">
                        <Link
                          to={
                            '/products/' +
                            categoryName.toLowerCase() +
                            '/' +
                            sub_1.name.replaceAll(' ', '-').toLowerCase() +
                            '/' +
                            sub_2.name.replaceAll(' ', '-').toLowerCase()
                          }
                        >
                          <h3
                            className="font-light text-[14px]"
                            onClick={closeCategory}
                          >
                            {sub_2.name}
                          </h3>
                        </Link>
                        {sub_2.children?.map((sub_3, i) => (
                          <div key={i} className="space-y-3.5">
                            <Link
                              to={`/products/${categoryName.toLowerCase()}/${sub_1.name
                                .replaceAll(' ', '-')
                                .toLowerCase()}/${sub_2.name
                                .replaceAll(' ', '-')
                                .toLowerCase()}/${sub_3.name
                                .replaceAll(' ', '-')
                                .toLowerCase()}`}
                            >
                              <h3
                                className="font-light text-[14px] pl-2"
                                onClick={closeCategory}
                              >
                                {sub_3.name}
                              </h3>
                            </Link>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="w-1/4 bg-slate-100"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryDropdown;
