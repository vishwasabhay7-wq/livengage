import type { Schema, Struct } from '@strapi/strapi';

export interface AboutCoreValues extends Struct.ComponentSchema {
  collectionName: 'components_about_core_values';
  info: {
    description: '';
    displayName: 'Core Values';
  };
  attributes: {
    heading: Schema.Attribute.String;
    Items: Schema.Attribute.Component<'shared.value-item', true>;
  };
}

export interface AboutCta extends Struct.ComponentSchema {
  collectionName: 'components_about_ctas';
  info: {
    description: '';
    displayName: 'CTA';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    primaryCtaHref: Schema.Attribute.String;
    primaryCtaLabel: Schema.Attribute.String;
    secondaryCtaHref: Schema.Attribute.String;
    secondaryCtaLabel: Schema.Attribute.String;
  };
}

export interface AboutHero extends Struct.ComponentSchema {
  collectionName: 'components_about_heroes';
  info: {
    description: '';
    displayName: 'Hero';
  };
  attributes: {
    badge: Schema.Attribute.String;
    bgImage: Schema.Attribute.Media<'images'>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    primaryCtaHref: Schema.Attribute.String;
    primaryCtaLabel: Schema.Attribute.String;
    secondaryCtaHref: Schema.Attribute.String;
    secondaryCtaLabel: Schema.Attribute.String;
  };
}

export interface AboutLeadership extends Struct.ComponentSchema {
  collectionName: 'components_about_leaderships';
  info: {
    description: '';
    displayName: 'Leadership';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    Members: Schema.Attribute.Component<'shared.team-member', true>;
  };
}

export interface AboutMissionVision extends Struct.ComponentSchema {
  collectionName: 'components_about_mission_visions';
  info: {
    description: '';
    displayName: 'Mission Vision';
  };
  attributes: {
    missionDescription: Schema.Attribute.Text;
    missionHeading: Schema.Attribute.String;
    visionDescription: Schema.Attribute.Text;
    visionHeading: Schema.Attribute.String;
  };
}

export interface AboutTimeline extends Struct.ComponentSchema {
  collectionName: 'components_about_timelines';
  info: {
    description: '';
    displayName: 'Timeline';
  };
  attributes: {
    heading: Schema.Attribute.String;
    Items: Schema.Attribute.Component<'shared.timeline-item', true>;
  };
}

export interface BecomeAHostApplicationSection extends Struct.ComponentSchema {
  collectionName: 'components_become_a_host_application_sections';
  info: {
    description: '';
    displayName: 'Application Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    Steps: Schema.Attribute.Component<'become-a-host.application-step', true>;
  };
}

export interface BecomeAHostApplicationStep extends Struct.ComponentSchema {
  collectionName: 'components_become_a_host_application_steps';
  info: {
    description: '';
    displayName: 'Application Step';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BecomeAHostBenefit extends Struct.ComponentSchema {
  collectionName: 'components_become_a_host_benefits';
  info: {
    description: '';
    displayName: 'Benefit';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Enumeration<
      [
        'star',
        'videocam',
        'forum',
        'group_add',
        'model_training',
        'trending_up',
        'rocket_launch',
        'support_agent',
        'workpaces',
        'monetization_on',
        'payments',
        'schedule',
        'verified',
        'public',
        'headset_mic',
        'campaign',
        'diversity_3',
        'smart_toy',
        'insights',
        'military_tech',
        'person_search',
        'groups',
        'emoji_events',
        'diamond',
      ]
    >;
    layoutVariant: Schema.Attribute.Enumeration<
      ['featured-top', 'standard', 'featured-bottom']
    > &
      Schema.Attribute.DefaultTo<'standard'>;
    title: Schema.Attribute.String;
  };
}

export interface BecomeAHostBenefits extends Struct.ComponentSchema {
  collectionName: 'components_become_a_host_benefits_lists';
  info: {
    description: '';
    displayName: 'Benefits';
  };
  attributes: {
    Items: Schema.Attribute.Component<'become-a-host.benefit', true>;
  };
}

export interface BecomeAHostHero extends Struct.ComponentSchema {
  collectionName: 'components_become_a_host_heroes';
  info: {
    description: '';
    displayName: 'Hero';
  };
  attributes: {
    badge: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    primaryCtaHref: Schema.Attribute.String;
    primaryCtaLabel: Schema.Attribute.String;
    secondaryCtaHref: Schema.Attribute.String;
    secondaryCtaLabel: Schema.Attribute.String;
  };
}

export interface BecomeAHostRequirement extends Struct.ComponentSchema {
  collectionName: 'components_become_a_host_requirements';
  info: {
    description: '';
    displayName: 'Requirement';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Enumeration<
      [
        'star',
        'videocam',
        'forum',
        'group_add',
        'model_training',
        'trending_up',
        'rocket_launch',
        'support_agent',
        'workpaces',
        'monetization_on',
        'payments',
        'schedule',
        'verified',
        'public',
        'headset_mic',
        'campaign',
        'diversity_3',
        'smart_toy',
        'insights',
        'military_tech',
        'person_search',
        'groups',
        'emoji_events',
        'diamond',
      ]
    >;
    title: Schema.Attribute.String;
  };
}

export interface BecomeAHostRequirements extends Struct.ComponentSchema {
  collectionName: 'components_become_a_host_requirements_lists';
  info: {
    description: '';
    displayName: 'Requirements';
  };
  attributes: {
    Items: Schema.Attribute.Component<'become-a-host.requirement', true>;
  };
}

export interface BecomeAHostStatItem extends Struct.ComponentSchema {
  collectionName: 'components_become_a_host_stat_items';
  info: {
    description: '';
    displayName: 'Stat Item';
  };
  attributes: {
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BecomeAHostStats extends Struct.ComponentSchema {
  collectionName: 'components_become_a_host_stats';
  info: {
    description: '';
    displayName: 'Stats';
  };
  attributes: {
    stats: Schema.Attribute.Component<'become-a-host.stat-item', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
        },
        number
      >;
  };
}

export interface BecomeAnAgentApplicationSection
  extends Struct.ComponentSchema {
  collectionName: 'components_become_an_agent_application_sections';
  info: {
    description: '';
    displayName: 'Application Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
  };
}

export interface BecomeAnAgentHero extends Struct.ComponentSchema {
  collectionName: 'components_become_an_agent_heroes';
  info: {
    description: '';
    displayName: 'Hero';
  };
  attributes: {
    badge: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    headingHighlight: Schema.Attribute.String;
    headingPart1: Schema.Attribute.String;
    headingPart3: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    primaryCtaHref: Schema.Attribute.String;
    primaryCtaLabel: Schema.Attribute.String;
    secondaryCtaHref: Schema.Attribute.String;
    secondaryCtaLabel: Schema.Attribute.String;
    stat1Label: Schema.Attribute.String;
    stat1Value: Schema.Attribute.String;
    stat2Label: Schema.Attribute.String;
    stat2Value: Schema.Attribute.String;
    stat3Label: Schema.Attribute.String;
    stat3Value: Schema.Attribute.String;
  };
}

export interface BecomeAnAgentResponsibilitiesSection
  extends Struct.ComponentSchema {
  collectionName: 'components_become_an_agent_responsibilities_sections';
  info: {
    description: '';
    displayName: 'Responsibilities Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    Items: Schema.Attribute.Component<'become-an-agent.responsibility', true>;
  };
}

export interface BecomeAnAgentResponsibility extends Struct.ComponentSchema {
  collectionName: 'components_become_an_agent_responsibilities';
  info: {
    description: '';
    displayName: 'Responsibility';
  };
  attributes: {
    checklist: Schema.Attribute.Component<
      'become-an-agent.responsibility-item',
      true
    >;
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Enumeration<
      [
        'star',
        'videocam',
        'forum',
        'group_add',
        'model_training',
        'trending_up',
        'rocket_launch',
        'support_agent',
        'workpaces',
        'monetization_on',
        'payments',
        'schedule',
        'verified',
        'public',
        'headset_mic',
        'campaign',
        'diversity_3',
        'smart_toy',
        'insights',
        'military_tech',
        'person_search',
        'groups',
        'emoji_events',
        'diamond',
        'bolt',
        'analytics',
      ]
    >;
    themeColor: Schema.Attribute.Enumeration<
      ['primary', 'secondary', 'tertiary']
    > &
      Schema.Attribute.DefaultTo<'primary'>;
    title: Schema.Attribute.String;
  };
}

export interface BecomeAnAgentResponsibilityItem
  extends Struct.ComponentSchema {
  collectionName: 'components_become_an_agent_responsibility_items';
  info: {
    description: '';
    displayName: 'Responsibility Item';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface BecomeAnAgentRevenueModelSection
  extends Struct.ComponentSchema {
  collectionName: 'components_become_an_agent_revenue_model_sections';
  info: {
    description: '';
    displayName: 'Revenue Model Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    Projection: Schema.Attribute.Component<
      'become-an-agent.revenue-projection',
      false
    >;
    tiers: Schema.Attribute.Component<'become-an-agent.revenue-tier', true>;
  };
}

export interface BecomeAnAgentRevenueProjection extends Struct.ComponentSchema {
  collectionName: 'components_become_an_agent_revenue_projections';
  info: {
    description: '';
    displayName: 'Revenue Projection';
  };
  attributes: {
    disclaimer: Schema.Attribute.String;
    override1: Schema.Attribute.String;
    override2: Schema.Attribute.String;
    revenue1: Schema.Attribute.String;
    revenue2: Schema.Attribute.String;
    teamSize1: Schema.Attribute.String;
    teamSize2: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BecomeAnAgentRevenueTier extends Struct.ComponentSchema {
  collectionName: 'components_become_an_agent_revenue_tiers';
  info: {
    description: '';
    displayName: 'Revenue Tier';
  };
  attributes: {
    description: Schema.Attribute.Text;
    number: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ContactUsCity extends Struct.ComponentSchema {
  collectionName: 'components_contact_us_cities';
  info: {
    description: '';
    displayName: 'City';
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

export interface ContactUsContactChannel extends Struct.ComponentSchema {
  collectionName: 'components_contact_us_contact_channels';
  info: {
    description: '';
    displayName: 'Contact Channel';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    linkHref: Schema.Attribute.String;
    linkText: Schema.Attribute.String;
    themeColor: Schema.Attribute.Enumeration<
      ['primary', 'secondary', 'tertiary']
    > &
      Schema.Attribute.DefaultTo<'primary'>;
    title: Schema.Attribute.String;
  };
}

export interface ContactUsContactChannelsSection
  extends Struct.ComponentSchema {
  collectionName: 'components_contact_us_contact_channels_sections';
  info: {
    description: '';
    displayName: 'Contact Channels Section';
  };
  attributes: {
    items: Schema.Attribute.Component<'contact-us.contact-channel', true>;
  };
}

export interface ContactUsGlobalMapSection extends Struct.ComponentSchema {
  collectionName: 'components_contact_us_global_map_sections';
  info: {
    description: '';
    displayName: 'Global Map Section';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    statusLabel: Schema.Attribute.String;
    statusSubtext: Schema.Attribute.String;
    statusValue: Schema.Attribute.String;
  };
}

export interface ContactUsHero extends Struct.ComponentSchema {
  collectionName: 'components_contact_us_heroes';
  info: {
    description: '';
    displayName: 'Hero';
  };
  attributes: {
    description: Schema.Attribute.Text;
    highlightWord: Schema.Attribute.String;
    titleStart: Schema.Attribute.String;
  };
}

export interface ContactUsOperationalNetworksSection
  extends Struct.ComponentSchema {
  collectionName: 'components_contact_us_operational_networks_sections';
  info: {
    description: '';
    displayName: 'Operational Networks Section';
  };
  attributes: {
    networks: Schema.Attribute.Component<'contact-us.region-node', true>;
  };
}

export interface ContactUsRegionNode extends Struct.ComponentSchema {
  collectionName: 'components_contact_us_region_nodes';
  info: {
    description: '';
    displayName: 'Region Node';
  };
  attributes: {
    cities: Schema.Attribute.Component<'contact-us.city', true>;
    region: Schema.Attribute.String;
  };
}

export interface HomeCta extends Struct.ComponentSchema {
  collectionName: 'components_home_ctas';
  info: {
    description: '';
    displayName: 'CTA';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    headingHighlight: Schema.Attribute.String & Schema.Attribute.Required;
    headingPart1: Schema.Attribute.String & Schema.Attribute.Required;
    primaryCtaHref: Schema.Attribute.String & Schema.Attribute.Required;
    primaryCtaLabel: Schema.Attribute.String & Schema.Attribute.Required;
    secondaryCtaHref: Schema.Attribute.String & Schema.Attribute.Required;
    secondaryCtaLabel: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeFaq extends Struct.ComponentSchema {
  collectionName: 'components_home_faqs';
  info: {
    description: '';
    displayName: 'FAQ';
  };
  attributes: {
    faqs: Schema.Attribute.Component<'shared.faq-item', true>;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeHero extends Struct.ComponentSchema {
  collectionName: 'components_home_heroes';
  info: {
    description: '';
    displayName: 'Hero';
  };
  attributes: {
    avatars: Schema.Attribute.Media<'images', true>;
    badgeText: Schema.Attribute.String;
    creatorCount: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    earningsAmount: Schema.Attribute.String;
    headingHighlight: Schema.Attribute.String;
    headingPart1: Schema.Attribute.String;
    headingPart3: Schema.Attribute.String;
    heroImage: Schema.Attribute.Media<'images'>;
    primaryCtaHref: Schema.Attribute.String & Schema.Attribute.Required;
    primaryCtaLabel: Schema.Attribute.String & Schema.Attribute.Required;
    secondaryCtaHref: Schema.Attribute.String & Schema.Attribute.Required;
    secondaryCtaLabel: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeServices extends Struct.ComponentSchema {
  collectionName: 'components_home_services';
  info: {
    description: '';
    displayName: 'Services';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    services: Schema.Attribute.Component<'shared.service-card', true>;
  };
}

export interface HomeStats extends Struct.ComponentSchema {
  collectionName: 'components_home_stats';
  info: {
    description: '';
    displayName: 'Stats';
  };
  attributes: {
    stats: Schema.Attribute.Component<'shared.stat-item', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
        },
        number
      >;
  };
}

export interface HomeTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_home_testimonials';
  info: {
    description: '';
    displayName: 'Testimonials';
  };
  attributes: {
    badge: Schema.Attribute.String & Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    testimonials: Schema.Attribute.Component<'shared.testimonial-card', true>;
  };
}

export interface HomeWhyChooseUs extends Struct.ComponentSchema {
  collectionName: 'components_home_why_choose_us';
  info: {
    description: '';
    displayName: 'Why Choose Us';
  };
  attributes: {
    badge1: Schema.Attribute.String & Schema.Attribute.Required;
    badge2: Schema.Attribute.String & Schema.Attribute.Required;
    cell2: Schema.Attribute.Component<'shared.why-cell-2', false>;
    cell3: Schema.Attribute.Component<'shared.why-cell-icon', false>;
    cell4: Schema.Attribute.Component<'shared.why-cell-icon', false>;
    cell5: Schema.Attribute.Component<'shared.why-cell-5', false>;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface JoinUsBenefitItem extends Struct.ComponentSchema {
  collectionName: 'components_join_us_benefit_items';
  info: {
    description: '';
    displayName: 'Benefit Item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    span: Schema.Attribute.Enumeration<['single', 'wide']> &
      Schema.Attribute.DefaultTo<'single'>;
    title: Schema.Attribute.String;
  };
}

export interface JoinUsBenefits extends Struct.ComponentSchema {
  collectionName: 'components_join_us_benefits';
  info: {
    description: '';
    displayName: 'Benefits';
  };
  attributes: {
    eyebrow: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    items: Schema.Attribute.Component<'join-us.benefit-item', true>;
  };
}

export interface JoinUsHero extends Struct.ComponentSchema {
  collectionName: 'components_join_us_heroes';
  info: {
    description: '';
    displayName: 'Hero';
  };
  attributes: {
    description: Schema.Attribute.Text;
    headingHighlight: Schema.Attribute.String;
    headingPart1: Schema.Attribute.String;
  };
}

export interface JoinUsRoleCard extends Struct.ComponentSchema {
  collectionName: 'components_join_us_role_cards';
  info: {
    description: '';
    displayName: 'Role Card';
  };
  attributes: {
    accentColor: Schema.Attribute.Enumeration<
      ['primary', 'secondary', 'tertiary']
    >;
    ctaHref: Schema.Attribute.String;
    ctaLabel: Schema.Attribute.String;
    decorativeIcon: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    features: Schema.Attribute.Component<'shared.feature', true>;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<['primary', 'secondary', 'dark']>;
  };
}

export interface JoinUsRoleCards extends Struct.ComponentSchema {
  collectionName: 'components_join_us_role_cards_lists';
  info: {
    description: '';
    displayName: 'Role Cards';
  };
  attributes: {
    items: Schema.Attribute.Component<'join-us.role-card', true>;
  };
}

export interface JoinUsStats extends Struct.ComponentSchema {
  collectionName: 'components_join_us_stats';
  info: {
    description: '';
    displayName: 'Stats';
  };
  attributes: {
    stats: Schema.Attribute.Component<'shared.stat-item', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
        },
        number
      >;
  };
}

export interface PartnerAppBenefitsSection extends Struct.ComponentSchema {
  collectionName: 'components_partner_app_benefits';
  info: {
    displayName: 'Benefits Section';
  };
  attributes: {
    benefits: Schema.Attribute.Component<'shared.value-item', true>;
  };
}

export interface PartnerAppFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_partner_app_faq_sections';
  info: {
    displayName: 'FAQ Section';
  };
  attributes: {
    faqs: Schema.Attribute.Component<'shared.faq-item', true>;
    title: Schema.Attribute.String;
    titleHighlight: Schema.Attribute.String;
  };
}

export interface PartnerAppHero extends Struct.ComponentSchema {
  collectionName: 'components_partner_app_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    avatars: Schema.Attribute.Media<'images' | 'files', true>;
    badgeText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    heroImage: Schema.Attribute.Media<'images' | 'files'>;
    primaryCtaLabel: Schema.Attribute.String;
    primaryCtaUrl: Schema.Attribute.String;
    secondaryCtaLabel: Schema.Attribute.String;
    secondaryCtaUrl: Schema.Attribute.String;
    statsLabel: Schema.Attribute.String;
    statsValue: Schema.Attribute.String;
    titleHighlight: Schema.Attribute.String;
    titlePart1: Schema.Attribute.String;
  };
}

export interface PartnerAppStepsSection extends Struct.ComponentSchema {
  collectionName: 'components_partner_app_steps_sections';
  info: {
    displayName: 'Steps Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    steps: Schema.Attribute.Component<'shared.value-item', true>;
    title: Schema.Attribute.String;
    titleHighlight: Schema.Attribute.String;
  };
}

export interface PartnerAppSupportSection extends Struct.ComponentSchema {
  collectionName: 'components_partner_app_support_sections';
  info: {
    displayName: 'Support Section';
  };
  attributes: {
    badgeText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    email: Schema.Attribute.String;
    phone: Schema.Attribute.String;
    primaryCtaLabel: Schema.Attribute.String;
    primaryCtaUrl: Schema.Attribute.String;
    secondaryCtaLabel: Schema.Attribute.String;
    secondaryCtaUrl: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface PartnerAppTechReq extends Struct.ComponentSchema {
  collectionName: 'components_partner_app_tech_reqs';
  info: {
    displayName: 'Tech Requirement';
  };
  attributes: {
    androidReq: Schema.Attribute.String;
    componentName: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    iosReq: Schema.Attribute.String;
    sharedReq: Schema.Attribute.String;
  };
}

export interface PartnerAppTechReqSection extends Struct.ComponentSchema {
  collectionName: 'components_partner_app_tech_req_sections';
  info: {
    displayName: 'Tech Requirements Section';
  };
  attributes: {
    requirements: Schema.Attribute.Component<'partner-app.tech-req', true>;
    title: Schema.Attribute.String;
  };
}

export interface PartnerAppTestimonialsSection extends Struct.ComponentSchema {
  collectionName: 'components_partner_app_testimonials_sections';
  info: {
    displayName: 'Testimonials Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    testimonials: Schema.Attribute.Component<'shared.testimonial-card', true>;
    title: Schema.Attribute.String;
    titleHighlight: Schema.Attribute.String;
  };
}

export interface PartnerAppTierItem extends Struct.ComponentSchema {
  collectionName: 'components_partner_app_tier_items';
  info: {
    displayName: 'Tier Item';
  };
  attributes: {
    features: Schema.Attribute.Component<'shared.feature', true>;
    isPopular: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    name: Schema.Attribute.String;
    splitText: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
  };
}

export interface PartnerAppTiersSection extends Struct.ComponentSchema {
  collectionName: 'components_partner_app_tiers_sections';
  info: {
    displayName: 'Tiers Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    tiers: Schema.Attribute.Component<'partner-app.tier-item', true>;
    title: Schema.Attribute.String;
    titleHighlight: Schema.Attribute.String;
  };
}

export interface PartnerAppToolItem extends Struct.ComponentSchema {
  collectionName: 'components_partner_app_tool_items';
  info: {
    displayName: 'Tool Item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    features: Schema.Attribute.Component<'shared.feature', true>;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface PartnerAppToolsSection extends Struct.ComponentSchema {
  collectionName: 'components_partner_app_tools_sections';
  info: {
    displayName: 'Tools Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    titleHighlight: Schema.Attribute.String;
    tools: Schema.Attribute.Component<'partner-app.tool-item', true>;
  };
}

export interface PartnerAppVideoSection extends Struct.ComponentSchema {
  collectionName: 'components_partner_app_video';
  info: {
    displayName: 'Video Section';
  };
  attributes: {
    creatorAvatar: Schema.Attribute.Media<'images' | 'files'>;
    creatorName: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    titleHighlight: Schema.Attribute.String;
    video: Schema.Attribute.Media<'videos' | 'files'>;
    videoThumbnail: Schema.Attribute.Media<'images' | 'files'>;
    viewerCount: Schema.Attribute.String;
  };
}

export interface PartnersCtaSection extends Struct.ComponentSchema {
  collectionName: 'components_partners_cta_sections';
  info: {
    description: '';
    displayName: 'CTA Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    primaryButtonText: Schema.Attribute.String;
    secondaryButtonText: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface PartnersEngineeredImpact extends Struct.ComponentSchema {
  collectionName: 'components_partners_engineered_impacts';
  info: {
    description: '';
    displayName: 'Engineered Impact';
  };
  attributes: {
    card1Description: Schema.Attribute.Text;
    card1Image: Schema.Attribute.Media<'images'>;
    card1Title: Schema.Attribute.String;
    card2Description: Schema.Attribute.Text;
    card2MetricLabel: Schema.Attribute.String;
    card2MetricValue: Schema.Attribute.String;
    card2Title: Schema.Attribute.String;
    card3Description: Schema.Attribute.Text;
    card3Features: Schema.Attribute.Component<
      'partners.integration-feature',
      true
    >;
    card3Image: Schema.Attribute.Media<'images'>;
    card3Title: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface PartnersFeatureAppData extends Struct.ComponentSchema {
  collectionName: 'components_partners_feature_app_data';
  info: {
    description: '';
    displayName: 'Feature App Data';
  };
  attributes: {
    featured: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    heroImage: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Feature App Data'>;
    video: Schema.Attribute.Media<'videos'>;
  };
}

export interface PartnersGrowthLoop extends Struct.ComponentSchema {
  collectionName: 'components_partners_growth_loops';
  info: {
    description: '';
    displayName: 'Growth Loop';
  };
  attributes: {
    steps: Schema.Attribute.Component<'partners.growth-step', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface PartnersGrowthStep extends Struct.ComponentSchema {
  collectionName: 'components_partners_growth_steps';
  info: {
    description: '';
    displayName: 'Growth Step';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    iconBackgroundColor: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface PartnersHero extends Struct.ComponentSchema {
  collectionName: 'components_partners_heroes';
  info: {
    description: '';
    displayName: 'Hero';
  };
  attributes: {
    badge: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    primaryButtonText: Schema.Attribute.String;
    secondaryButtonText: Schema.Attribute.String;
    title: Schema.Attribute.String;
    titleHighlight: Schema.Attribute.String;
    titlePart3: Schema.Attribute.String;
  };
}

export interface PartnersIntegrationFeature extends Struct.ComponentSchema {
  collectionName: 'components_partners_integration_features';
  info: {
    description: '';
    displayName: 'Integration Feature';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface PartnersIntegrationSection extends Struct.ComponentSchema {
  collectionName: 'components_partners_integration_sections';
  info: {
    description: '';
    displayName: 'Integration Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    Features: Schema.Attribute.Component<'partners.integration-feature', true>;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface PartnersMetric extends Struct.ComponentSchema {
  collectionName: 'components_partners_metrics';
  info: {
    description: '';
    displayName: 'Metric';
  };
  attributes: {
    borderColor: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface PartnersPlatform extends Struct.ComponentSchema {
  collectionName: 'components_partners_platforms';
  info: {
    description: '';
    displayName: 'Platform';
  };
  attributes: {
    description: Schema.Attribute.Text;
    highlight: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String;
    platformId: Schema.Attribute.String;
    shortName: Schema.Attribute.String;
    Stats: Schema.Attribute.Component<'partners.metric', true>;
    type: Schema.Attribute.Enumeration<
      ['main', 'community', 'innovation', 'emerging']
    >;
  };
}

export interface PartnersRichMediaPlayer extends Struct.ComponentSchema {
  collectionName: 'components_partners_rich_media_players';
  info: {
    description: '';
    displayName: 'Rich Media Player';
  };
  attributes: {
    subtitle: Schema.Attribute.String;
    thumbnail: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface PartnersSuccessMetricsSection extends Struct.ComponentSchema {
  collectionName: 'components_partners_success_metrics_sections';
  info: {
    description: '';
    displayName: 'Success Metrics Section';
  };
  attributes: {
    Metrics: Schema.Attribute.Component<'partners.metric', true>;
    title: Schema.Attribute.String;
  };
}

export interface PartnersTechSpecs extends Struct.ComponentSchema {
  collectionName: 'components_partners_tech_specs';
  info: {
    description: '';
    displayName: 'Tech Specs Grid';
  };
  attributes: {
    metrics: Schema.Attribute.Component<'partners.metric', true>;
  };
}

export interface ServicesCta extends Struct.ComponentSchema {
  collectionName: 'components_services_ctas';
  info: {
    description: '';
    displayName: 'CTA';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    primaryCtaHref: Schema.Attribute.String;
    primaryCtaLabel: Schema.Attribute.String;
    secondaryCtaHref: Schema.Attribute.String;
    secondaryCtaLabel: Schema.Attribute.String;
  };
}

export interface ServicesHero extends Struct.ComponentSchema {
  collectionName: 'components_services_heroes';
  info: {
    description: '';
    displayName: 'Hero';
  };
  attributes: {
    badge: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.Text;
  };
}

export interface ServicesPartnerAppItem extends Struct.ComponentSchema {
  collectionName: 'components_services_partner_app_items';
  info: {
    description: '';
    displayName: 'Partner App Item';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    ctaLabel: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ServicesPartnerApps extends Struct.ComponentSchema {
  collectionName: 'components_services_partner_apps';
  info: {
    description: '';
    displayName: 'Partner Apps';
  };
  attributes: {
    apps: Schema.Attribute.Component<'services.partner-app-item', true>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
  };
}

export interface ServicesServiceItem extends Struct.ComponentSchema {
  collectionName: 'components_services_service_items';
  info: {
    description: '';
    displayName: 'Service Item';
  };
  attributes: {
    accentColor: Schema.Attribute.Enumeration<
      ['primary', 'secondary', 'tertiary']
    >;
    description: Schema.Attribute.Text;
    features: Schema.Attribute.Component<'shared.feature', true>;
    href: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    linkText: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ServicesServicesList extends Struct.ComponentSchema {
  collectionName: 'components_services_services_lists';
  info: {
    description: '';
    displayName: 'Services List';
  };
  attributes: {
    items: Schema.Attribute.Component<'services.service-item', true>;
  };
}

export interface ServicesStats extends Struct.ComponentSchema {
  collectionName: 'components_services_stats';
  info: {
    description: '';
    displayName: 'Stats';
  };
  attributes: {
    stats: Schema.Attribute.Component<'shared.stat-item', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
        },
        number
      >;
  };
}

export interface SharedAvatar extends Struct.ComponentSchema {
  collectionName: 'components_shared_avatars';
  info: {
    description: '';
    displayName: 'Avatar';
  };
  attributes: {
    alt: Schema.Attribute.String;
    initials: Schema.Attribute.String;
    src: Schema.Attribute.Media<'images'>;
    type: Schema.Attribute.Enumeration<['image', 'initials']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'image'>;
  };
}

export interface SharedFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_faq_items';
  info: {
    description: '';
    displayName: 'FAQ Item';
  };
  attributes: {
    answer: Schema.Attribute.Text & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedFeature extends Struct.ComponentSchema {
  collectionName: 'components_shared_features';
  info: {
    description: '';
    displayName: 'Feature';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface SharedServiceCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_service_cards';
  info: {
    description: '';
    displayName: 'Service Card';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    href: Schema.Attribute.String & Schema.Attribute.Required;
    linkText: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedStatItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_stat_items';
  info: {
    description: '';
    displayName: 'Stat Item';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedTeamMember extends Struct.ComponentSchema {
  collectionName: 'components_shared_team_members';
  info: {
    description: '';
    displayName: 'Team Member';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    linkedinUrl: Schema.Attribute.String;
    name: Schema.Attribute.String;
    role: Schema.Attribute.String;
  };
}

export interface SharedTestimonialCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_testimonial_cards';
  info: {
    description: '';
    displayName: 'Testimonial Card';
  };
  attributes: {
    author: Schema.Attribute.String & Schema.Attribute.Required;
    avatar: Schema.Attribute.Component<'shared.avatar', false>;
    quote: Schema.Attribute.Text & Schema.Attribute.Required;
    rating: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<5>;
    role: Schema.Attribute.String;
  };
}

export interface SharedTimelineItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_timeline_items';
  info: {
    description: '';
    displayName: 'Timeline Item';
  };
  attributes: {
    color: Schema.Attribute.Enumeration<['primary', 'secondary', 'tertiary']>;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    layout: Schema.Attribute.Enumeration<['left', 'right']>;
    statLabel: Schema.Attribute.String;
    statValue: Schema.Attribute.String;
    title: Schema.Attribute.String;
    year: Schema.Attribute.String;
  };
}

export interface SharedValueItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_value_items';
  info: {
    description: '';
    displayName: 'Value Item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedWhyCell2 extends Struct.ComponentSchema {
  collectionName: 'components_shared_why_cell_2s';
  info: {
    description: '';
    displayName: 'Why Cell 2 (Stats)';
    icon: 'chart-pie';
  };
  attributes: {
    bigNumber: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface SharedWhyCell5 extends Struct.ComponentSchema {
  collectionName: 'components_shared_why_cell_5s';
  info: {
    description: '';
    displayName: 'Why Cell 5 (Growth)';
    icon: 'trending-up';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    progressLabel: Schema.Attribute.String;
  };
}

export interface SharedWhyCellIcon extends Struct.ComponentSchema {
  collectionName: 'components_shared_why_cell_icons';
  info: {
    description: '';
    displayName: 'Why Cell (Icon)';
    icon: 'star';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'about.core-values': AboutCoreValues;
      'about.cta': AboutCta;
      'about.hero': AboutHero;
      'about.leadership': AboutLeadership;
      'about.mission-vision': AboutMissionVision;
      'about.timeline': AboutTimeline;
      'become-a-host.application-section': BecomeAHostApplicationSection;
      'become-a-host.application-step': BecomeAHostApplicationStep;
      'become-a-host.benefit': BecomeAHostBenefit;
      'become-a-host.benefits': BecomeAHostBenefits;
      'become-a-host.hero': BecomeAHostHero;
      'become-a-host.requirement': BecomeAHostRequirement;
      'become-a-host.requirements': BecomeAHostRequirements;
      'become-a-host.stat-item': BecomeAHostStatItem;
      'become-a-host.stats': BecomeAHostStats;
      'become-an-agent.application-section': BecomeAnAgentApplicationSection;
      'become-an-agent.hero': BecomeAnAgentHero;
      'become-an-agent.responsibilities-section': BecomeAnAgentResponsibilitiesSection;
      'become-an-agent.responsibility': BecomeAnAgentResponsibility;
      'become-an-agent.responsibility-item': BecomeAnAgentResponsibilityItem;
      'become-an-agent.revenue-model-section': BecomeAnAgentRevenueModelSection;
      'become-an-agent.revenue-projection': BecomeAnAgentRevenueProjection;
      'become-an-agent.revenue-tier': BecomeAnAgentRevenueTier;
      'contact-us.city': ContactUsCity;
      'contact-us.contact-channel': ContactUsContactChannel;
      'contact-us.contact-channels-section': ContactUsContactChannelsSection;
      'contact-us.global-map-section': ContactUsGlobalMapSection;
      'contact-us.hero': ContactUsHero;
      'contact-us.operational-networks-section': ContactUsOperationalNetworksSection;
      'contact-us.region-node': ContactUsRegionNode;
      'home.cta': HomeCta;
      'home.faq': HomeFaq;
      'home.hero': HomeHero;
      'home.services': HomeServices;
      'home.stats': HomeStats;
      'home.testimonials': HomeTestimonials;
      'home.why-choose-us': HomeWhyChooseUs;
      'join-us.benefit-item': JoinUsBenefitItem;
      'join-us.benefits': JoinUsBenefits;
      'join-us.hero': JoinUsHero;
      'join-us.role-card': JoinUsRoleCard;
      'join-us.role-cards': JoinUsRoleCards;
      'join-us.stats': JoinUsStats;
      'partner-app.benefits-section': PartnerAppBenefitsSection;
      'partner-app.faq-section': PartnerAppFaqSection;
      'partner-app.hero': PartnerAppHero;
      'partner-app.steps-section': PartnerAppStepsSection;
      'partner-app.support-section': PartnerAppSupportSection;
      'partner-app.tech-req': PartnerAppTechReq;
      'partner-app.tech-req-section': PartnerAppTechReqSection;
      'partner-app.testimonials-section': PartnerAppTestimonialsSection;
      'partner-app.tier-item': PartnerAppTierItem;
      'partner-app.tiers-section': PartnerAppTiersSection;
      'partner-app.tool-item': PartnerAppToolItem;
      'partner-app.tools-section': PartnerAppToolsSection;
      'partner-app.video-section': PartnerAppVideoSection;
      'partners.cta-section': PartnersCtaSection;
      'partners.engineered-impact': PartnersEngineeredImpact;
      'partners.feature-app-data': PartnersFeatureAppData;
      'partners.growth-loop': PartnersGrowthLoop;
      'partners.growth-step': PartnersGrowthStep;
      'partners.hero': PartnersHero;
      'partners.integration-feature': PartnersIntegrationFeature;
      'partners.integration-section': PartnersIntegrationSection;
      'partners.metric': PartnersMetric;
      'partners.platform': PartnersPlatform;
      'partners.rich-media-player': PartnersRichMediaPlayer;
      'partners.success-metrics-section': PartnersSuccessMetricsSection;
      'partners.tech-specs': PartnersTechSpecs;
      'services.cta': ServicesCta;
      'services.hero': ServicesHero;
      'services.partner-app-item': ServicesPartnerAppItem;
      'services.partner-apps': ServicesPartnerApps;
      'services.service-item': ServicesServiceItem;
      'services.services-list': ServicesServicesList;
      'services.stats': ServicesStats;
      'shared.avatar': SharedAvatar;
      'shared.faq-item': SharedFaqItem;
      'shared.feature': SharedFeature;
      'shared.service-card': SharedServiceCard;
      'shared.stat-item': SharedStatItem;
      'shared.team-member': SharedTeamMember;
      'shared.testimonial-card': SharedTestimonialCard;
      'shared.timeline-item': SharedTimelineItem;
      'shared.value-item': SharedValueItem;
      'shared.why-cell-2': SharedWhyCell2;
      'shared.why-cell-5': SharedWhyCell5;
      'shared.why-cell-icon': SharedWhyCellIcon;
    }
  }
}
