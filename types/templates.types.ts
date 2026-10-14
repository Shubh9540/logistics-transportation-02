export interface HeaderNavLink {
  id: string;
  label: string;
  url: string;
  hasDropdown?: boolean;
}

export interface HeaderData {
  logo: string;
  logoAlt: string;
  navLinksLeft: HeaderNavLink[];
  navLinksRight: HeaderNavLink[];
  contactButton: { text: string; url: string; icon: string };
  openMenuLabel: string;
  closeMenuLabel: string;
}

export interface HeaderProps {
  data?: HeaderData;
}

export interface TopBarData {
  tagline: string;
  taglineIcon: string;
  phoneValue: string;
  emailValue: string;
  locationValue: string;
  socialLinks?: { id: string; icon: string; url: string }[];
}

export interface TopBarProps {
  data?: TopBarData;
  logoData?: HeaderData;
}

export interface BreadcrumbPath {
  id: string;
  label: string;
  url?: string;
}

export interface BreadcrumbData {
  title: string;
  bgImage: string;
  paths: BreadcrumbPath[];
}

export interface BreadcrumbProps {
  data?: BreadcrumbData;
}

export interface GalleryItem {
  id: string;
  image: string;
  imageAlt: string;
}

export interface GalleryData {
  subtitle: string;
  title1: string;
  highlightedTitle: string;
  description: string;
  openImageLabel: string;
  closeLabel: string;
  previousLabel: string;
  nextLabel: string;
  images: GalleryItem[];
}

export interface GallerySectionProps {
  data?: GalleryData;
}

export interface HeroButtonData {
  text: string;
  url: string;
  icon: string;
}

export interface HeroSlideData {
  id: string;
  eyebrow: string;
  titleLine1: string;
  highlightedTitle: string;
  description: string;
  image: string;
  imageAlt: string;
  primaryButton: HeroButtonData;
}

export interface HeroData {
  slides: HeroSlideData[];
  autoplayDelay: number;
  slideNavigationLabel: string;
}

export interface HeroSectionProps {
  data?: HeroData;
}

export interface AboutFeatureItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface AboutUsData {
  subtitle: string;
  titleLine1: string;
  highlightedTitle: string;
  description: string;
  imageMain: string;
  imageMainAlt: string;
  experienceImage: string;
  experienceImageAlt: string;
  experienceValue: string;
  experienceLabel: string;
  features: AboutFeatureItem[];
  button: { text: string; url: string };
}

export interface AboutUsSectionProps {
  data?: AboutUsData;
  hideButton?: boolean;
}

export interface PaginationItem {
  id: string;
  label: string;
  page: number;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  url: string;
}

export interface ServicesData {
  subtitle: string;
  title1: string;
  title2: string;
  backgroundImage: string;
  backgroundImageAlt: string;
  linkText: string;
  linkUrl: string;
  services: ServiceItem[];
}

export interface ServicesSectionProps {
  data?: ServicesData;
}

export interface HowItWorksStep {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: string;
  url: string;
}

export interface HowItWorksData {
  subtitle: string;
  title1: string;
  highlightedTitle: string;
  description: string;
  linkText: string;
  steps: HowItWorksStep[];
}

export interface HowItWorksSectionProps {
  data?: HowItWorksData;
}

export interface ServiceGridItem {
  id: string;
  title: string;
  highlightedTitle?: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: string;
  url: string;
}

export interface ServiceGridData {
  subtitle: string;
  title1: string;
  highlightedTitle: string;
  description: string;
  linkText: string;
  services: ServiceGridItem[];
}

export interface ServiceGridProps {
  data?: ServiceGridData;
}

export interface ServiceDetailNavigationItem {
  id: string;
  title: string;
  icon: string;
  url: string;
}

export interface ServiceDetailContactItem {
  id: string;
  value: string;
  url: string;
}

export interface ServiceDetailAssistanceData {
  icon: string;
  title: string;
  description: string;
  phoneLabel: string;
  emailLabel: string;
  phones: ServiceDetailContactItem[];
  emails: ServiceDetailContactItem[];
  buttonText: string;
  buttonUrl: string;
}

export interface ServiceDetailFeature {
  id: string;
  text: string;
}

export interface ServiceDetailItem {
  id: string;
  title: string;
  icon: string;
  heroImage: string;
  heroImageAlt: string;
  heroTitle: string;
  heroHighlightedTitle: string;
  heroDescription: string;
  subtitle: string;
  heading: string;
  headingHighlightedTitle: string;
  description: string;
  quoteText: string;
  quoteUrl: string;
  overviewSubtitle: string;
  overviewTitle: string;
  overviewHighlightedTitle: string;
  overviewDescription: string;
  overviewImage: string;
  overviewImageAlt: string;
  featuresSubtitle: string;
  featuresTitle: string;
  featuresHighlightedTitle: string;
  features: ServiceDetailFeature[];
  featuresImage: string;
  featuresImageAlt: string;
}

export interface ServiceDetailProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface ServiceDetailData {
  navigationLabel: string;
  services: ServiceDetailItem[];
  navigation: ServiceDetailNavigationItem[];
  assistance: ServiceDetailAssistanceData;
  processSubtitle: string;
  processTitle: string;
  processHighlightedTitle: string;
  processSteps: ServiceDetailProcessStep[];
}

export interface ServiceDetailSectionProps {
  data?: ServiceDetailData;
  serviceId: string;
}

export interface ServiceDetailsPageProps {
  params: Promise<{ id: string }>;
}

export interface ServiceCardProps {
  service: ServiceItem;
  linkText: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  quote: string;
  rating: number;
  avatar: string;
}

export interface TestimonialsData {
  subtitle: string;
  title1: string;
  title2: string;
  highlightedTitle: string;
  description: string;
  backgroundImage: string;
  backgroundImageAlt: string;
  rightImage: string;
  rightImageAlt: string;
  previousLabel: string;
  nextLabel: string;
  slideLabel: string;
  testimonials: TestimonialItem[];
}

export interface TestimonialsSectionProps {
  data?: TestimonialsData;
}

export interface TestimonialGridData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  testimonials: TestimonialItem[];
}

export interface TestimonialGridProps {
  data?: TestimonialGridData;
}

export interface FooterData {
  logo: string;
  logoAlt: string;
  logoUrl: string;
  backgroundImage: string;
  backgroundImageAlt: string;
  patternImage: string;
  patternImageAlt: string;
  copyrightText: string;
  description: string;
  quickLinksTitle: string;
  contactTitle: string;
  servicesTitle: string;
  galleryTitle: string;
  galleryUrl: string;
  backToTopLabel: string;
  backToTopUrl: string;
  socialLinks: { id: string; icon: string; label: string; url: string }[];
  quickLinks: { id: string; label: string; url: string }[];
  serviceLinks: { id: string; label: string; url: string }[];
  galleryImages: { id: string; image: string; imageAlt: string }[];
  contactItems: { id: string; icon: string; title: string; value: string; url?: string }[];
}

export interface FooterProps {
  data?: FooterData;
}

export interface NotFoundData {
  code: string;
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
}

export interface NotFoundSectionProps {
  data?: NotFoundData;
}

export interface TemplateComponentItem {
  key: string;
  component: string;
}

export interface TemplateComponentPage {
  components: TemplateComponentItem[];
}

export interface TemplateComponentsData {
  shared: {
    Topbar: string;
    Header: string;
    Footer: string;
  };
  pages: Record<string, TemplateComponentPage>;
}

export interface PageComponentRegistry {
  components: string[];
}

export interface WhyChooseUsFeature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface WhyChooseUsClientAvatar {
  id: string;
  image: string;
  imageAlt: string;
}

export interface WhyChooseUsData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  clientCount: string;
  clientLabel: string;
  clientAvatars: WhyChooseUsClientAvatar[];
  features: WhyChooseUsFeature[];
  imageMain: string;
  imageAlt: string;
  patternImage: string;
  patternImageAlt: string;
  videoUrl: string;
  videoLabel: string;
  closeVideoLabel: string;
}

export interface WhyChooseUsSectionProps {
  data?: WhyChooseUsData;
}

export interface ContactInfoLine {
  id: string;
  text: string;
}

export interface ContactInfoItem {
  id: string;
  icon: string;
  title: string;
  lines: ContactInfoLine[];
  url?: string;
}

export interface ContactSocialLink {
  id: string;
  icon: string;
  label: string;
  url: string;
}

export interface ContactData {
  backgroundImage: string;
  backgroundImageAlt: string;
  intro: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    description: string;
  };
  form: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    description: string;
    fullNamePlaceholder: string;
    phonePlaceholder: string;
    emailPlaceholder: string;
    subjectPlaceholder: string;
    messagePlaceholder: string;
    buttonText: string;
    successMessage: string;
  };
  contactPanel: {
    eyebrow: string;
    title1: string;
    titleHighlight: string;
    description: string;
    items: ContactInfoItem[];
    socialTitle: string;
    socialLinks: ContactSocialLink[];
  };
  location: {
    eyebrow: string;
    title: string;
    description: string;
    buttonText: string;
    buttonUrl: string;
    mapUrl: string;
    mapTitle: string;
  };
}

export interface ContactSectionProps {
  data?: ContactData;
}

export interface BlogAuthor {
  id: string;
  name: string;
  role: string;
  image: string;
  imageAlt: string;
}

export interface BlogPost {
  id: string;
  category: string;
  title: string;
  description: string;
  date: string;
  image: string;
  imageAlt: string;
  url: string;
  author: BlogAuthor;
}

export interface BlogData {
  subtitle: string;
  title1: string;
  highlightedTitle: string;
  description: string;
  authorPrefix: string;
  readMoreText: string;
  viewAllText: string;
  viewAllUrl: string;
  itemsPerPage: number;
  paginationLabel: string;
  pagination: PaginationItem[];
  posts: BlogPost[];
}

export interface BlogSectionProps {
  data?: BlogData;
}

export interface BlogGridProps {
  data?: BlogData;
}

export interface SiteMetadataData {
  title: string;
  description: string;
  icon: string;
}

export interface TransWorldTemplateData {
  common: {
    metadata: SiteMetadataData;
    aboutBreadcrumb?: BreadcrumbData;
    servicesBreadcrumb?: BreadcrumbData;
    serviceDetailsBreadcrumb?: BreadcrumbData;
    contactBreadcrumb?: BreadcrumbData;
    galleryBreadcrumb?: BreadcrumbData;
    testimonialsBreadcrumb?: BreadcrumbData;
    blogsBreadcrumb?: BreadcrumbData;
    notFound?: NotFoundData;
    Footer?: FooterData;
  };
  categories: {
    Logistics: {
      templateComponents?: TemplateComponentsData;
      sections: {
        TopBar?: { variants?: { TransWorldTopBar1?: TopBarData } };
        Header?: { variants?: { TransWorldHeader1?: HeaderData } };
        Hero?: { variants?: { TransWorldHero1?: HeroData } };
        AboutUs?: { variants?: { TransWorldAboutUs1?: AboutUsData } };
        Gallery?: { variants?: { TransWorldGallery1?: GalleryData } };
        Services?: { variants?: { TransWorldServices1?: ServicesData } };
        HowItWorks?: { variants?: { TransWorldHowItWorks1?: HowItWorksData } };
        Service?: { variants?: { TransWorldService1?: ServiceGridData } };
        ServiceDetail?: { variants?: { TransWorldServiceDetail1?: ServiceDetailData } };
        Testimonials?: { variants?: { TransWorldTestimonials1?: TestimonialsData } };
        TestimonialGrid?: { variants?: { TransWorldTestimonialGrid1?: TestimonialGridData } };
        Blog?: { variants?: { TransWorldBlog1?: BlogData } };
        whyChooseUs?: { variants?: { TransWorldWhyChooseUs1?: WhyChooseUsData } };
        contact?: { variants?: { TransWorldContact1?: ContactData } };
      };
    };
  };
  pages: Record<string, PageComponentRegistry>;
}
