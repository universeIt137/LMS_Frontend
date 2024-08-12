import { useState } from "react";

const TeamCategoriesSidebar = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [showMore, setShowMore] = useState(false);

  const filterCourse = (value) => {
    setSelectedCategory(value);
    // Add your filter logic here
  };
  const filterCourses = (value) => {
    setSelectedPrice(value);
    // Add your filtering logic here
  };

  return (
    <div className="p-4 w-full md:w-[220px] shadow-md bg-base-200">
      <h3 className="text-lg font-semibold mb-4">Categories</h3>

      <div className="mb-2">
        <input
          className="form-check-input mr-2"
          type="radio"
          value="all"
          name="category"
          id="category_all"
          onChange={() => filterCourse("all")}
          checked={selectedCategory === "all"}
        />
        <label className="form-check-label text-sm" htmlFor="category_all">
          All category
        </label>
      </div>

      {/* Main Categories */}
      <div className={`${showMore ? "" : "max-h-40 overflow-hidden"} transition-all`}>
        <div className="mb-2">
          <input
            className="form-check-input mr-2"
            type="radio"
            value="web-design"
            name="category"
            id="category-10"
            onChange={() => filterCourse("web-design")}
            checked={selectedCategory === "web-design"}
          />
          <label className="form-check-label text-sm" htmlFor="category-10">
            Web Design
          </label>
        </div>

        <ul className="ml-4 space-y-2">
          <li>
            <div className="mb-2">
              <input
                className="form-check-input mr-2"
                type="radio"
                value="responsive-design"
                name="category"
                id="sub_category-11"
                onChange={() => filterCourse("responsive-design")}
                checked={selectedCategory === "responsive-design"}
              />
              <label className="form-check-label text-sm" htmlFor="sub_category-11">
                Responsive Design
              </label>
            </div>
          </li>
          <li>
            <div className="mb-2">
              <input
                className="form-check-input mr-2"
                type="radio"
                value="wordpress-theme"
                name="category"
                id="sub_category-12"
                onChange={() => filterCourse("wordpress-theme")}
                checked={selectedCategory === "wordpress-theme"}
              />
              <label className="form-check-label text-sm" htmlFor="sub_category-12">
                WordPress Theme
              </label>
            </div>
          </li>
          <li>
            <div className="mb-2">
              <input
                className="form-check-input mr-2"
                type="radio"
                value="bootstrap"
                name="category"
                id="sub_category-19"
                onChange={() => filterCourse("bootstrap")}
                checked={selectedCategory === "bootstrap"}
              />
              <label className="form-check-label text-sm" htmlFor="sub_category-19">
                Bootstrap
              </label>
            </div>
          </li>
          <li>
            <div className="mb-2">
              <input
                className="form-check-input mr-2"
                type="radio"
                value="html-css"
                name="category"
                id="sub_category-20"
                onChange={() => filterCourse("html-css")}
                checked={selectedCategory === "html-css"}
              />
              <label className="form-check-label text-sm" htmlFor="sub_category-20">
                HTML CSS
              </label>
            </div>
          </li>
        </ul>
      </div>

      <div className={`${showMore ? "" : "max-h-40 overflow-hidden"} transition-all`}>
        <div className="mb-2">
          <input
            className="form-check-input mr-2"
            type="radio"
            value="graphic-design"
            name="category"
            id="category-101"
            onChange={() => filterCourse("graphic-design")}
            checked={selectedCategory === "graphic-design"}
          />
          <label className="form-check-label text-sm" htmlFor="category-101">
            Graphic Design
          </label>
        </div>

        <ul className="ml-4 space-y-2">
          <li>
            <div className="mb-2">
              <input
                className="form-check-input mr-2"
                type="radio"
                value="photoshop"
                name="category"
                id="sub_category-111"
                onChange={() => filterCourse("photoshop")}
                checked={selectedCategory === "photoshop"}
              />
              <label className="form-check-label text-sm" htmlFor="sub_category-111">
                Photoshop
              </label>
            </div>
          </li>
          <li>
            <div className="mb-2">
              <input
                className="form-check-input mr-2"
                type="radio"
                value="adobe-illustrator"
                name="category"
                id="sub_category-1212"
                onChange={() => filterCourse("adobe-illustrator")}
                checked={selectedCategory === "adobe-illustrator"}
              />
              <label className="form-check-label text-sm" htmlFor="sub_category-1212">
                Adobe Illustrator
              </label>
            </div>
          </li>
        </ul>
      </div>

      <div className="mt-4">
        <button
          className="text-blue-500"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Show less" : "Show more"}
        </button>
      </div>
      <div className="p-4">
      <h3 className="text-lg font-semibold mb-4">Price</h3>

      <div className="flex items-center mb-2">
        <input
          className="mr-2"
          type="radio"
          name="price"
          value="all"
          id="price_all"
          onChange={() => filterCourses("all")}
          checked={selectedPrice === "all"}
        />
        <label className="text-sm" htmlFor="price_all">
          All
        </label>
      </div>

      <div className="flex items-center mb-2">
        <input
          className="mr-2"
          type="radio"
          name="price"
          value="free"
          id="price_free"
          onChange={() => filterCourses("free")}
          checked={selectedPrice === "free"}
        />
        <label className="text-sm" htmlFor="price_free">
          Free
        </label>
      </div>

      <div className="flex items-center mb-2">
        <input
          className="mr-2"
          type="radio"
          name="price"
          value="paid"
          id="price_paid"
          onChange={() => filterCourses("paid")}
          checked={selectedPrice === "paid"}
        />
        <label className="text-sm" htmlFor="price_paid">
          Paid
        </label>
      </div>
    </div>
    </div>
  );
};

export default TeamCategoriesSidebar;
