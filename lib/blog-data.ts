export interface BlogPost {
  id: string
  slug: string
  title: string
  description: string
  content: string
  author: string
  date: string
  category: string
  image?: string
  readTime: number
}

const GRAPHQL_ENDPOINT = "https://backend.appoloiptv.com/graphql"

// GraphQL query to fetch posts from WordPress
const POSTS_QUERY = `
  query GetPosts {
    posts(first: 100) {
      nodes {
        id
        slug
        title
        excerpt
        content
        date
        author {
          node {
            name
          }
        }
        categories(first: 1) {
          nodes {
            name
          }
        }
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`

async function fetchPostsFromWordPress(): Promise<BlogPost[]> {
  try {
    console.log("Fetching posts from WordPress GraphQL...")
    const response = await fetch(GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: POSTS_QUERY }),
      next: { revalidate: 3600 } // Cache for 1 hour
    })

    if (!response.ok) {
      console.warn(`WordPress HTTP error: ${response.status}`)
      return []
    }

    const data = await response.json()

    if (data.errors) {
      console.warn("GraphQL errors:", data.errors)
      return []
    }

    if (!data.data?.posts?.nodes || data.data.posts.nodes.length === 0) {
      console.warn("No posts found in WordPress response")
      return []
    }

    console.log(`Successfully fetched ${data.data.posts.nodes.length} posts from WordPress`)

    // Transform WordPress posts to our BlogPost format
    return data.data.posts.nodes.map((post: any) => {
      // Strip HTML tags from content
      const plainTextContent = post.content
        .replace(/<[^>]*>/g, "")
        .trim()

      // Get excerpt or create from content
      const excerpt = post.excerpt 
        ? post.excerpt.replace(/<[^>]*>/g, "")
        : plainTextContent.substring(0, 200) + "..."

      return {
        id: post.id,
        slug: post.slug,
        title: post.title || "Untitled",
        description: excerpt,
        content: post.content || plainTextContent,
        author: post.author?.node?.name || "Apollo Team",
        date: new Date(post.date).toISOString().split('T')[0],
        category: post.categories?.nodes?.[0]?.name || "General",
        image: post.featuredImage?.node?.sourceUrl,
        readTime: Math.max(3, Math.ceil(plainTextContent.split(/\s+/).length / 200)),
      }
    })
  } catch (error) {
    console.error("Error fetching posts from WordPress:", error)
    return []
  }
}

// Fallback hardcoded posts for when WordPress is unavailable
const fallbackBlogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "how-to-install-iptv-on-firestick",
    title: "How to Install IPTV on Firestick - Step-by-Step Guide",
    description: "Learn how to install Apollo Group TV on your Amazon Firestick in just 5 minutes. Complete setup guide with screenshots.",
    content: `Installing IPTV on your Amazon Firestick is easier than you think. Follow our step-by-step guide to get streaming in minutes.

## What You'll Need

- Amazon Firestick (2nd Gen or newer)
- Apollo Group TV subscription
- IPTV Smarters app or IPTV player of your choice
- WiFi connection

## Installation Steps

### Step 1: Access the Appstore
Navigate to the Appstore on your Firestick and search for "IPTV Smarters".

### Step 2: Download the App
Click Download and wait for the installation to complete.

### Step 3: Add Your Credentials
Once installed, open the app and enter your Apollo Group TV credentials.

### Step 4: Start Streaming
Select your preferred channels and start enjoying 21,000+ live channels in 4K quality!

## Troubleshooting

If you experience buffering, ensure your internet connection has at least 10 Mbps speed. Our anti-freeze technology will handle most connection issues automatically.

For additional support, contact our team via WhatsApp for instant assistance.`,
    author: "Apollo Support Team",
    date: "2026-03-10",
    category: "Installation",
    readTime: 5,
  },
  {
    id: "2",
    slug: "4k-streaming-tips-maximize-viewing-experience",
    title: "4K Streaming Tips: Maximize Your Viewing Experience",
    description: "Discover expert tips to optimize your 4K streaming quality with Apollo Group TV. Get the best viewing experience possible.",
    content: `4K streaming opens a whole new world of entertainment possibilities. Here's how to get the most out of your Apollo Group TV subscription.

## Internet Speed Requirements

For optimal 4K streaming, we recommend:
- Minimum: 25 Mbps
- Recommended: 50+ Mbps
- Ultra: 100+ Mbps for multi-device viewing

## Device Optimization

### Update Your Devices
Ensure all your devices have the latest firmware and app updates installed.

### Create a Dedicated WiFi Network
If possible, use a 5GHz WiFi connection for better speed and stability.

### Close Background Apps
Free up bandwidth by closing unused applications on your streaming device.

## Content Selection

Apollo Group TV offers thousands of 4K movies and series. Look for the 4K badge next to titles to find UHD content.

## Network Optimization

Position your router centrally for better coverage, and minimize interference from other devices. Our 99.9% uptime guarantee means you'll rarely experience interruptions.`,
    author: "Technical Team",
    date: "2026-03-08",
    category: "Tips & Tricks",
    readTime: 7,
  },
  {
    id: "3",
    slug: "iptv-reseller-program-earn-money",
    title: "Start Your IPTV Reseller Business with Apollo Group TV",
    description: "Join our reseller program and earn recurring income. Complete guide to becoming an Apollo Group TV reseller.",
    content: `Are you interested in starting your own IPTV reseller business? Apollo Group TV offers a lucrative reseller program with competitive commissions and comprehensive support.

## Why Become a Reseller?

- **Recurring Revenue**: Earn commissions on every subscription renewal
- **High Margins**: Competitive commission structure with performance bonuses
- **Marketing Support**: Free marketing materials and promotional resources
- **24/7 Support**: Dedicated support team for your customers
- **Flexible Pricing**: Set your own pricing and packages

## Getting Started

### Requirements
- Valid business documentation
- Initial minimum order (20 subscriptions)
- Active WhatsApp for customer support

### Commission Structure
- Bronze Level: 20% commission (20-50 subscriptions)
- Silver Level: 25% commission (50-100 subscriptions)
- Gold Level: 30% commission (100+ subscriptions)

## Support & Resources

We provide:
- Professional branding materials
- Landing page templates
- Customer support guides
- Regular training updates
- Real-time dashboard for tracking sales

Ready to start earning? Contact us via WhatsApp for reseller application.`,
    author: "Business Development",
    date: "2026-03-05",
    category: "Business",
    readTime: 6,
  },
  {
    id: "4",
    slug: "best-sports-channels-on-apollo-group-tv",
    title: "The Best Sports Channels Available on Apollo Group TV",
    description: "Explore our comprehensive sports coverage. Live football, basketball, cricket, and more - all in stunning 4K quality.",
    content: `Apollo Group TV brings you the world's best sports content. With 21,000+ channels, you'll never miss a match again.

## Premium Sports Coverage

### Football (Soccer)
- Premier League
- La Liga
- Serie A
- Bundesliga
- Champions League
- International Tournaments

### Basketball
- NBA
- EuroLeague
- National Basketball Leagues worldwide

### Cricket
- IPL
- ICC World Cup
- Test Matches
- County Cricket

### Other Sports
- Tennis (Grand Slams, ATP, WTA)
- Golf (PGA, European Tour)
- Formula 1
- UFC & Boxing
- Rugby
- American Football (NFL)

## PPV Events

Experience exclusive Pay-Per-View events for major sporting occasions:
- World Cup Finals
- Champions League Finals
- Major Tennis Grand Slams
- Boxing Championship Fights

## Multi-Device Streaming

Watch sports on multiple screens simultaneously with our advanced streaming technology powered by anti-freeze technology.

Subscribe to Apollo Group TV today and never miss your favorite sporting moment!`,
    author: "Content Team",
    date: "2026-03-01",
    category: "Sports",
    readTime: 5,
  },
  {
    id: "5",
    slug: "compatibility-all-devices-supported",
    title: "Device Compatibility: Watch on Any Screen",
    description: "Apollo Group TV works on all major devices. From Smart TVs to smartphones, stream anywhere, anytime.",
    content: `Apollo Group TV is designed to work on virtually any modern streaming device. Here's our complete compatibility list.

## Smart TVs

**Fully Supported:**
- Samsung Smart TVs (Tizen OS)
- LG Smart TVs (WebOS)
- Sony Bravia
- Philips Smart TVs
- TCL Smart TVs
- Hisense Smart TVs

## Streaming Devices

- Amazon Firestick (all generations)
- Apple TV
- Android TV boxes
- NVIDIA Shield
- Chromecast

## Mobile Devices

**iOS:**
- iPhone (iOS 14+)
- iPad (iPadOS 14+)

**Android:**
- Android phones (Android 8.0+)
- Android tablets

## Specialized Players

- MAG devices (popular in Eastern Europe and Middle East)
- VLC Media Player
- Kodi (with IPTV Simple Client)

## Web Browser

Stream directly through your web browser on:
- Chrome
- Firefox
- Safari
- Edge

## Installation Support

For any device, we provide:
- Detailed setup guides
- Video tutorials
- Live support via WhatsApp
- Configuration assistance

No matter what device you have, Apollo Group TV has you covered!`,
    author: "Technical Support",
    date: "2026-02-28",
    category: "Technology",
    readTime: 4,
  },
]

// Note: Removed in-memory cache to ensure fresh fetches
// Next.js handles caching via the revalidate parameter in fetch

export async function getBlogPosts(): Promise<BlogPost[]> {
  // Fetch from WordPress
  let posts = await fetchPostsFromWordPress()

  // If WordPress fetch fails or returns empty, use fallback
  if (!posts || posts.length === 0) {
    console.log("Using fallback blog posts")
    posts = fallbackBlogPosts
  }

  return posts
}

export async function getBlogPost(slug: string): Promise<BlogPost | undefined> {
  const posts = await getBlogPosts()
  return posts.find((post) => post.slug === slug)
}

export async function getBlogPostsByCategory(category: string): Promise<BlogPost[]> {
  const posts = await getBlogPosts()
  return posts.filter((post) => post.category === category)
}

export async function getAllCategories(): Promise<string[]> {
  const posts = await getBlogPosts()
  return Array.from(new Set(posts.map((post) => post.category)))
}

// For static generation
export async function getAllBlogPostSlugs(): Promise<string[]> {
  const posts = await getBlogPosts()
  return posts.map((post) => post.slug)
}
