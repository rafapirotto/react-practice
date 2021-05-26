import search from "./assets/search.png";
import userImage from "./assets/user-image.png";
import arrow from "./assets/arrow.png";

const Header = (props) => {
  return (
    <header class="flex ml-24 pr-10 py-20">
      <a href="/#">
        <div class="movy text-4xl">Movy</div>
      </a>
      <div class="flex ml-32 items-center">
        <div class="mx-6 font-normal">
          <a href="/#">Home </a>
        </div>
        <div class="mx-6">
          <a href="/#">Movies </a>
        </div>
        <div class="mx-6">
          <a href="/#">Series </a>
        </div>
        <div class="mx-6">
          <a href="/#">Recently Added </a>
        </div>
        <div class="mx-6">
          <a href="/#">My List </a>
        </div>
      </div>
      <div class="flex items-center flex-grow justify-end">
        <a href="/#">
          <img src={search} class="mx-3 search" alt="search" />
        </a>
        <a href="/#">
          <img src={userImage} class="mx-3 user-image" alt="user" />
        </a>
        <a href="/#">
          <img src={arrow} class="mx-3 arrow" alt="arrow" />
        </a>
      </div>
    </header>
  );
};

export default Header;
