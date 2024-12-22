import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { LuAlignLeft } from 'react-icons/lu';
import Link from 'next/link';
import { Button } from '../ui/button';
import UserIcon from './UserIcon';
import { links } from '@/utils/links';
import SignOutLink from './SignOutLink';

function LinksDropdown() {
  // Return the JSX structure for the dropdown menu
  return (
    <DropdownMenu>
      {/* Trigger for the dropdown menu, allowing it to be opened when the button is clicked */}
      <DropdownMenuTrigger asChild>
        {/* Button styled as an outline with flex layout and a maximum width */}
        <Button variant='outline' className='flex gap-4 max-w-[100px]'>
          {/* Icon representing alignment, with specified width and height */}
          <LuAlignLeft className='w-6 h-6' />
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>
      {/* Content of the dropdown menu, with specified width and alignment */}
      <DropdownMenuContent className='w-52' align='start' sideOffset={10}>
        {/* Map through the links array to create dropdown items */}
        {links.map((link) => {
          return (
            // Each dropdown item is keyed by the link's href
            <DropdownMenuItem key={link.href}>
              {/* Link component styled to be capitalized and full width */}
              <Link href={link.href} className='capitalize w-full'>
                {/* Display the label of the link */}
                {link.label}
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export default LinksDropdown;