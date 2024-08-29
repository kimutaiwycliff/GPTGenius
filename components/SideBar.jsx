import MemberProfile from './MemberProfile';
import NavLinks from './NavLinks';
import SideBarHeader from './SideBarHeader';

const SideBar = () => {
  return (
    <div className="px-4 w-80 min-h-full bg-base-300 py-12 grid grid-rows-[auto,1fr,auto]">
      {/* //first row */}
      <SideBarHeader />
      {/* //second row */}
      <NavLinks />
      {/* //third row */}
      <MemberProfile />
    </div>
  );
};
export default SideBar;
