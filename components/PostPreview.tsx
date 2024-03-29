import Avatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import Date from 'components/PostDate'
import type { Post } from 'lib/sanity.queries'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  category,
}: Omit<Post, '_id'>) {
  const truncate = (str: string) => {
    return str.length > 200 ? str.substring(0, 200) + '...' : str
  }

  return (
    <div>
      <div className="mb-5">
        <CoverImage
          slug={slug}
          title={title}
          image={coverImage}
          priority={false}
        />
      </div>
      <h3 className="mb-3 text-3xl leading-snug">
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="mb-4 text-lg">
        <Date dateString={date} />
        {category && <span className="text-gray-600"> | {category.title}</span>}
      </div>
      {excerpt && (
        <p className="mb-4 text-lg leading-relaxed">
          {truncate(excerpt)}
          <a
            href={`/posts/${slug}`}
            className="text-blue-500 hover:text-blue-900"
          >
            Read More
          </a>
        </p>
      )}
      {author && <Avatar name={author.name} picture={author.picture} />}
    </div>
  )
}
