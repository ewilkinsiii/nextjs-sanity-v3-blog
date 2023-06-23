import Container from 'components/BlogContainer'
import BlogHeader from 'components/BlogHeader'
import Layout from 'components/BlogLayout'
import Footer from 'components/Footer'
import HeroPost from 'components/HeroPost'
import IndexPageHead from 'components/IndexPageHead'
import MoreStories from 'components/MoreStories'
import NavBar from 'components/NavBar'
import * as demo from 'lib/demo.data'
import type { Category, Post, Settings } from 'lib/sanity.queries'
import Hero from './Hero'

export interface IndexPageProps {
  preview?: boolean
  loading?: boolean
  posts: Post[]
  settings: Settings
  categories: Category[]
}

export default function IndexPage(props: IndexPageProps) {
  const { preview, loading, posts, categories, settings } = props
  const [heroPost, ...morePosts] = posts || []
  const { title = demo.title, description = demo.description } = settings || {}

  return (
    <>
      <IndexPageHead settings={settings} />

      <Layout preview={preview} loading={loading}>
        <NavBar title={title} categories={categories} />
        <Container>
          <Hero
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
            category={heroPost.category}
          />
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
        <Footer />
      </Layout>
    </>
  )
}
