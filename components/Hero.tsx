import AuthorAvatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import Date from 'components/PostDate'
import type { Post } from 'lib/sanity.queries'
import Link from 'next/link'

export default function Hero(
  props: Pick<
    Post,
    'title' | 'coverImage' | 'date' | 'excerpt' | 'author' | 'slug' | 'category'
  >
) {
  const { title, coverImage, date, excerpt, author, slug, category } = props
  const truncate = (str: string) => {
    return str.length > 200 ? str.substring(0, 200) + '...' : str
  }

  return (
    <section className="body-font text-gray-600">
      <div className="container mx-auto flex flex-col items-center px-5 py-24 md:flex-row">
        <div className="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
          <h1 className="title-font mb-4 text-3xl font-medium text-gray-900 sm:text-4xl">
            {title || 'Untitled'}
          </h1>
          {excerpt && (
            <p className="mb-8 overflow-hidden text-clip leading-relaxed">
              {truncate(excerpt)}{' '}
              <a
                href={`/posts/${slug}`}
                className="text-blue-500 hover:text-blue-900"
              >
                Read More
              </a>
            </p>
          )}
          <div className="flex justify-center">
            <a
              className="inline-flex rounded border-0 bg-indigo-500 px-6 py-2 text-lg text-white hover:bg-indigo-600 focus:outline-none"
              href={`/posts/${slug}`}
            >
              View Blog
            </a>
          </div>
        </div>
        <div className="w-5/6 md:w-1/2 lg:w-full lg:max-w-lg">
          <CoverImage slug={slug} title={title} image={coverImage} priority />
        </div>
      </div>
    </section>
  )
}
