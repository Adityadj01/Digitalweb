/* eslint-disable no-unused-vars */
import { React, useState } from "react";
import PropTypes from "prop-types";
import { IoCloseOutline } from "react-icons/io5";

const genders = [
  "Male",
  "Female",
  "Abimegender",
  "Alt Abinary",
  "Acegender",
  "Aesthetigender",
  "Aftgender",
  "Agender",
  "Aic",
  "Androgyne",
  "Apogender",
  "Astronomique",
  "Attack Helicopter",
  "Azurgirl",
  "Backroomic",
  "Bigender",
  "Bigenderfluid",
  "Bagpipegender",
  "Bigenderflux",
  "Boyflip",
  "B♡y",
  "Biaoqingpandagender",
  "Cakegender",
  "Captigender",
  "Cassgender",
  "Cluttergender",
  "Cluwellous",
  "Cinnamoncarrotcakegender",
  "Condigender",
  "Coffeeyic",
  "Cookiegender",
  "Coconutgender",
  "Dazefluid",
  "Dazegender",
  "Demiagender",
  "Demiandrogyne",
  "Demibigender",
  "Demiboy",
  "Demicass",
  "Demienbyflux",
  "Demifemme",
  "Demifluid",
  "Demigirlflux",
  "Demigirl",
  "Denchuhsgender",
  "Drinkgender",
  "Demimin",
  "Demineutrois",
  "Dualdenialgender",
  "Endogender",
  "Errgender",
  "Egogender",
  "Eosgender",
  "Faunagender",
  "Fingenders",
  "Fluidqueer",
  "Foodgender",
  "Froggender",
  "Fruitgender",
  "Fluidflux",
  "Fluidqueer",
  "Fiaspec",
  "Femme",
  "Foggender",
  "Flowergender",
  "Fluidexpan-gender",
  "Flugenistatic",
  "Fractalgender",
  "Fluxstatic",
  "Galasterios",
  "Gastrogender",
  "Genderbi",
  "Genderbroken",
  "Globogender",
  "Genderfae",
  "Genderfaer",
  "Genderfaun",
  "Genderfaunet",
  "Genderflip",
  "Genderfluid",
  "Genderflux",
  "Genderfruct",
  "Genderlost",
  "Genderpan",
  "Gendersatyr",
  "Gendervoid",
  "Girlflip",
  "GigaChad",
  "G♡rl",
  "Hemigender",
  "Hemiboy",
  "Hemigirl",
  "Heminonbinary",
  "Hemigenderflux",
  "Heminonbinaryflux",
  "Hemigirlflux",
  "Hemiboyflux",
  "Hydrangeaflux",
  "Hypergender",
  "Hyperenby",
  "Hypergirl",
  "Hyperboy",
  "Hyperfluid",
  "Heartcookiegender",
  "Hazyfluid",
  "Heliogender",
  "Highempatix",
  "Hezegender",
  "Hotcocaic",
  "Hexagender",
  "Hillgender",
  "Hillgenderfluix",
  "Illusogender",
  "Intergender",
  "Intrafeminflux",
  "Intramascflux",
  "Iceberglettucegender",
  "Jokegender",
  "Juxera",
  "Karfein",
  "Kawaiinix",
  "Kenochoric",
  "Keingender",
  "Kesvios",
  "Keroppigender",
  "Keygender",
  "Ketugender",
  "Kidcoric",
  "Kidcorestalgic",
  "Kidliminalgic",
  "Kingender",
  "Kircore",
  "Krúttgender",
  "Kvenlegurflux",
  "Kevgender",
  "Kosmyc Gender Group",
  "Lexegender",
  "Lexicgender",
  "Libragender",
  "Linumgender",
  "Lucidic",
  "Magicia",
  "Mashgender",
  "Mekangender",
  "Mingenders",
  "Multigender",
  "Mythologender",
  "Medzfluid",
  "Neoboy",
  "Neogirl",
  "Nesciogender",
  "Neurogender",
  "Neugender",
  "Nonbinaryflux",
  "Nonvirmina",
  "Non-binary",
  "Offgender",
  "Omnixeno",
  "Orientationgender",
  "Pangender",
  "Paragender",
  "Paragirlflux",
  "Parifluid",
  "Presentisian",
  "Paraflux",
  "Phobigender",
  "Parafluid",
  "Proxvir",
  "Pupgender",
  "Polygender",
  "Polyflux",
  "Puzzlegender",
  "Pichugender",
  "Prettygender",
  "Pumpkinspice Gender",
  "Phytogender",
  "Polkgender",
  "Peachgender",
  "Pompomgender",
  "Pastromic",
  "Pinksugarcookiera",
  "Premale",
  "Prefluid",
  "Piegender",
  "Quadgender",
  "Qouigender",
  "Quoiboy",
  "Quintgender",
  "Quasigender",
  "Quasifluid",
  "Quesadillagender",
  "Rahugender",
  "Retrofluid",
  "Rosboy",
  "Reflective gender",
  "Rhombusgender",
  "Seasogender",
  "Sigma",
  "Solarset",
  "Sortafluid",
  "Sortagender",
  "Sortaboy",
  "Sortagirl",
  "Souryaic",
  "Stratogender",
  "Sungender",
  "Starwashic",
  "Transgender",
  "Transmasculine",
  "Transfeminine",
  "Transneutral",
  "Tomboy",
  "Tomgirl",
  "Two-Spirit",
  "Tetrisgender",
  "Trigender",
  "Triflux",
  "Trans-intersex",
  "Traumatagender",
  "Triquiboy",
  "Turbogender",
  "Unambiguous",
  "Vastgender",
  "Vapogender",
  "Venufluid",
  "Virilflux",
  "Vosgender",
  "Watergender",
  "Watermeletype",
  "WWaTTgender",
  "Warmcolern",
  "Wallquestioning",
  "Weekfluid",
  "Weirdcorestalgic",
  "Webcorestalgic",
  "Weirdthing",
  "Wistrafluid",
  "Worldgender",
  "Wonderlandgender",
  "Xenogender",
  "Xoragender",
  "Xenoflora",
  "Xenofluid",
  "Xiaspec",
  "X-gender",
  "Yippegender",
  "Yamcropic",
  "Zodiacgender",
  "Zoogender",
  "Zerogender",
  "Zertexios",
];


const Popup = ({ orderPopup, handleOrderPopup }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [expandedLetters, setExpandedLetters] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    email: '',
    phone: '',
    address: '',
  });
  const [showGenderOptions, setShowGenderOptions] = useState(false);
  const [filteredGenders, setFilteredGenders] = useState([]);

  const alphabeticalIndex = genders.reduce((acc, gender) => {
    const firstLetter = gender[0].toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(gender);
    return acc;
  }, {});
  
  const handleLetterSelect = (letter) => {
    setSelectedLetter(letter);
    setExpandedLetters((prevExpandedLetters) => ({
      ...prevExpandedLetters,
      [letter]: true,
    }));
    const filteredGendersByLetter = alphabeticalIndex[letter];
    setFilteredGenders(filteredGendersByLetter);
  };
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const filteredGenders = genders.filter((gender) => {
      return gender.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setFilteredGenders(filteredGenders);
  };

  const handleExpandLetter = (letter) => {
    setExpandedLetters((prevExpandedLetters) => ({
      ...prevExpandedLetters,
      [letter]: !prevExpandedLetters[letter],
    }));
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGenderSelect = (gender) => {
    setFormData({ ...formData, gender });
    setShowGenderOptions(false);
  };

  const handleGenderClick = () => {
    setShowGenderOptions(true);
  };

  const handleSubmit = () => {
    console.log('Form Data:', formData);
    handleOrderPopup();
  };

  return (
    <div>
      {orderPopup && (
        <div>
          <div className="h-screen w-screen fixed top-0 left-0 z-50 bg-black/50 backdrop-blur-sm">
            <div className="w-[300px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 rounded-md">
              {/* Header Section */}
              <div className="flex justify-between items-center ">
                <h1>Order Form</h1>
                <IoCloseOutline onClick={handleOrderPopup} className="text-2xl cursor-pointer" />
              </div>
              {/* Form Section */}
              <div className="mt-4">
                <form>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    placeholder="Name"
                    className="form-input"
                  />
                  <div className="relative">
                    <input
                      type="text"
                      name="gender"
                      value={formData.gender}
                      readOnly
                      onClick={handleGenderClick}
                      placeholder="Gender"
                      className="form-input cursor-pointer"
                    />
                    {showGenderOptions && (
                      <div className="absolute top-10 left-0 w-full bg-white shadow-md p-2 max-h-80 overflow-y-scroll">
                        <input
                          type="text"
                          placeholder="Search"
                          value={searchTerm}
                          onChange={handleSearch}
                          className="form-input w-full"
                        />
                        <ul>
                          {filteredGenders.length > 0 ? (
                            filteredGenders.map((gender) => (
                              <li key={gender}>
                                <button
                                  type="button"
                                  onClick={() => handleGenderSelect(gender)}
                                >
                                  {gender}
                                </button>
                              </li>
                            ))
                          ) : (
                            Object.keys(alphabeticalIndex).sort().map((letter) => (
                              <li key={letter}>
                                <button
                                  type="button"
                                  onClick={() => handleLetterSelect(letter)}
                                >
                                  {letter}
                                </button>
                                {expandedLetters[letter] && (
                                  <ul>
                                    {alphabeticalIndex[letter].map((gender) => (
                                      <li key={gender}>
                                        <button
                                          type="button"
                                          onClick={() => handleGenderSelect(gender)}
                                        >
                                          {gender}
                                        </button>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </li>
                            ))
                          )}
                        </ul>
                      </div>
                    )}
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    placeholder="Email"
                    className="form-input"
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                    placeholder="Phone"
                    className="form-input"
                  />
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleFormChange}
                    placeholder="Address"
                    className="form-input"
                  />
                  <button
                    className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleSubmit}
                  >
                    Order Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

Popup.propTypes = {
  orderPopup: PropTypes.bool.isRequired,
  handleOrderPopup: PropTypes.func.isRequired,
};

export default Popup;