import { Typography } from '@material-tailwind/react'
import Link from 'next/link'

const currentYear = new Date().getFullYear()

export default function Example() {
  return (
    <footer className="relative w-full">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <Typography variant="h5" className="mb-6">
            <Link href="/" className="hover:underline">
              Crafty Tech Hub
            </Link>
          </Typography>
        </div>
        <hr className="border-blue-gray-50 my-8" />
        <Typography color="blue-gray" className="text-center font-normal">
          &copy; 2023 Crafty Tech Hub. All rights reserved.
        </Typography>
      </div>
    </footer>
  )
}
