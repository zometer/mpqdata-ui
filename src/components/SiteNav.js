import SiteNavLink from 'components/SiteNavLink';
import { ChartBarIcon, UserIcon, UserGroupIcon, CalendarIcon } from '@heroicons/react/solid';
import 'App.scss';

function SiteNav() { 
  return (
    <nav className='siteNav'>
      <SiteNavLink href="/dashboard" text="Dashboard" icon={ChartBarIcon}/>
      <SiteNavLink href="/rosters" text="Roster" icon={UserIcon}/>
      <SiteNavLink href="/search/alliances" text="Alliance" icon={UserGroupIcon}/>
      <SiteNavLink href="/events" text="Events" icon={CalendarIcon}/>
    </nav>
  );
}
export default SiteNav;