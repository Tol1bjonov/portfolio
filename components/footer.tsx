import Link from "next/link"
import { FaGithub, FaTelegram, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="border-t py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-700 dark:text-white/80">DevPortfolio</h3>
            <p className="text-sm text-muted-foreground text-gray-700 dark:text-white/80">
              Creating beautiful web experiences with modern technologies.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-700 dark:text-white/80">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#about" className="text-gray-700 dark:text-white/80">
                  About
                </Link>
              </li>
              <li>
                <Link href="#skills" className="text-gray-700 dark:text-white/80">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-gray-700 dark:text-white/80">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-700 dark:text-white/80">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-700 dark:text-white/80">Connect</h3>
            <div className="flex space-x-4 text-gray-700 dark:text-white/80">
                <Link href="https://github.com/Tol1bjonov" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub className="h-6 w-6 text-gray-700 dark:text-white  dark:hover:text-indigo-400 transition-colors" />
                </Link>
                <Link href="https://www.linkedin.com/in/yusufjon-tolibjonov-870a1a332" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin className="h-6 w-6 text-gray-700 dark:text-white  dark:hover:text-indigo-400 transition-colors" />
                </Link>
                <Link href="https://t.me/yusufjon_tolibjonov" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                  <FaTelegram className="h-6 w-6 text-gray-700 dark:text-white  dark:hover:text-indigo-400 transition-colors" />
                </Link>
                <Link href="https://www.instagram.com/yusufjon.tolibjonov" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram className="h-6 w-6 text-gray-700 dark:text-white  dark:hover:text-indigo-400 transition-colors" />
                </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-700 dark:text-white/80">Contact</h3>
            <address className="not-italic text-sm text-muted-foreground">
              <a href="mailto:yusufjontolibjonov3@gmail.com" target="_blank">yusufjontolibjonov3@gmail.com</a>
              <p>Tashkent, Uzbekistan</p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t text-center text-sm text-gray-700 dark:text-white/80">
          <p>© {new Date().getFullYear()} Yusufjon Tolibjonov. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
