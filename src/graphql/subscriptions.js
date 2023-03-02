/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCollection = /* GraphQL */ `
  subscription OnCreateCollection(
    $filter: ModelSubscriptionCollectionFilterInput
  ) {
    onCreateCollection(filter: $filter) {
      belongs_to
      bibliographic_citation
      circa
      collection_category
      collectionmap_id
      collectionOptions
      create_date
      creator
      custom_key
      description
      display_date
      end_date
      explicit_content
      heirarchy_path
      id
      identifier
      language
      location
      modified_date
      ownerinfo
      parent_collection
      provenance
      related_url
      rights_holder
      rights_statement
      source
      start_date
      subject
      thumbnail_path
      title
      visibility
      collectionmap {
        collectionmap_category
        collection_id
        create_date
        id
        map_object
        modified_date
        collection {
          belongs_to
          bibliographic_citation
          circa
          collection_category
          collectionmap_id
          collectionOptions
          create_date
          creator
          custom_key
          description
          display_date
          end_date
          explicit_content
          heirarchy_path
          id
          identifier
          language
          location
          modified_date
          ownerinfo
          parent_collection
          provenance
          related_url
          rights_holder
          rights_statement
          source
          start_date
          subject
          thumbnail_path
          title
          visibility
          createdAt
          updatedAt
          collectionCollectionmapId
        }
        createdAt
        updatedAt
        collectionmapCollectionId
      }
      archives {
        items {
          alternative
          archiveOptions
          basis_of_record
          belongs_to
          bibliographic_citation
          circa
          conforms_to
          contributor
          coverage
          create_date
          created
          creator
          custom_key
          date
          description
          display_date
          end_date
          explicit
          extent
          format
          has_format
          has_part
          has_version
          heirarchy_path
          id
          identifier
          is_format_of
          is_version_of
          item_category
          language
          license
          location
          manifest_file_characterization
          manifest_url
          medium
          modified_date
          other_identifier
          parent_collection
          provenance
          publisher
          reference
          related_url
          repository
          resource_type
          rights_holder
          rights_statement
          source
          start_date
          subject
          tags
          temporal
          thumbnail_path
          title
          visibility
          createdAt
          updatedAt
          collectionArchivesId
          archiveCollectionId
        }
        nextToken
      }
      createdAt
      updatedAt
      collectionCollectionmapId
    }
  }
`;
export const onUpdateCollection = /* GraphQL */ `
  subscription OnUpdateCollection(
    $filter: ModelSubscriptionCollectionFilterInput
  ) {
    onUpdateCollection(filter: $filter) {
      belongs_to
      bibliographic_citation
      circa
      collection_category
      collectionmap_id
      collectionOptions
      create_date
      creator
      custom_key
      description
      display_date
      end_date
      explicit_content
      heirarchy_path
      id
      identifier
      language
      location
      modified_date
      ownerinfo
      parent_collection
      provenance
      related_url
      rights_holder
      rights_statement
      source
      start_date
      subject
      thumbnail_path
      title
      visibility
      collectionmap {
        collectionmap_category
        collection_id
        create_date
        id
        map_object
        modified_date
        collection {
          belongs_to
          bibliographic_citation
          circa
          collection_category
          collectionmap_id
          collectionOptions
          create_date
          creator
          custom_key
          description
          display_date
          end_date
          explicit_content
          heirarchy_path
          id
          identifier
          language
          location
          modified_date
          ownerinfo
          parent_collection
          provenance
          related_url
          rights_holder
          rights_statement
          source
          start_date
          subject
          thumbnail_path
          title
          visibility
          createdAt
          updatedAt
          collectionCollectionmapId
        }
        createdAt
        updatedAt
        collectionmapCollectionId
      }
      archives {
        items {
          alternative
          archiveOptions
          basis_of_record
          belongs_to
          bibliographic_citation
          circa
          conforms_to
          contributor
          coverage
          create_date
          created
          creator
          custom_key
          date
          description
          display_date
          end_date
          explicit
          extent
          format
          has_format
          has_part
          has_version
          heirarchy_path
          id
          identifier
          is_format_of
          is_version_of
          item_category
          language
          license
          location
          manifest_file_characterization
          manifest_url
          medium
          modified_date
          other_identifier
          parent_collection
          provenance
          publisher
          reference
          related_url
          repository
          resource_type
          rights_holder
          rights_statement
          source
          start_date
          subject
          tags
          temporal
          thumbnail_path
          title
          visibility
          createdAt
          updatedAt
          collectionArchivesId
          archiveCollectionId
        }
        nextToken
      }
      createdAt
      updatedAt
      collectionCollectionmapId
    }
  }
`;
export const onDeleteCollection = /* GraphQL */ `
  subscription OnDeleteCollection(
    $filter: ModelSubscriptionCollectionFilterInput
  ) {
    onDeleteCollection(filter: $filter) {
      belongs_to
      bibliographic_citation
      circa
      collection_category
      collectionmap_id
      collectionOptions
      create_date
      creator
      custom_key
      description
      display_date
      end_date
      explicit_content
      heirarchy_path
      id
      identifier
      language
      location
      modified_date
      ownerinfo
      parent_collection
      provenance
      related_url
      rights_holder
      rights_statement
      source
      start_date
      subject
      thumbnail_path
      title
      visibility
      collectionmap {
        collectionmap_category
        collection_id
        create_date
        id
        map_object
        modified_date
        collection {
          belongs_to
          bibliographic_citation
          circa
          collection_category
          collectionmap_id
          collectionOptions
          create_date
          creator
          custom_key
          description
          display_date
          end_date
          explicit_content
          heirarchy_path
          id
          identifier
          language
          location
          modified_date
          ownerinfo
          parent_collection
          provenance
          related_url
          rights_holder
          rights_statement
          source
          start_date
          subject
          thumbnail_path
          title
          visibility
          createdAt
          updatedAt
          collectionCollectionmapId
        }
        createdAt
        updatedAt
        collectionmapCollectionId
      }
      archives {
        items {
          alternative
          archiveOptions
          basis_of_record
          belongs_to
          bibliographic_citation
          circa
          conforms_to
          contributor
          coverage
          create_date
          created
          creator
          custom_key
          date
          description
          display_date
          end_date
          explicit
          extent
          format
          has_format
          has_part
          has_version
          heirarchy_path
          id
          identifier
          is_format_of
          is_version_of
          item_category
          language
          license
          location
          manifest_file_characterization
          manifest_url
          medium
          modified_date
          other_identifier
          parent_collection
          provenance
          publisher
          reference
          related_url
          repository
          resource_type
          rights_holder
          rights_statement
          source
          start_date
          subject
          tags
          temporal
          thumbnail_path
          title
          visibility
          createdAt
          updatedAt
          collectionArchivesId
          archiveCollectionId
        }
        nextToken
      }
      createdAt
      updatedAt
      collectionCollectionmapId
    }
  }
`;
export const onCreateCollectionmap = /* GraphQL */ `
  subscription OnCreateCollectionmap(
    $filter: ModelSubscriptionCollectionmapFilterInput
  ) {
    onCreateCollectionmap(filter: $filter) {
      collectionmap_category
      collection_id
      create_date
      id
      map_object
      modified_date
      collection {
        belongs_to
        bibliographic_citation
        circa
        collection_category
        collectionmap_id
        collectionOptions
        create_date
        creator
        custom_key
        description
        display_date
        end_date
        explicit_content
        heirarchy_path
        id
        identifier
        language
        location
        modified_date
        ownerinfo
        parent_collection
        provenance
        related_url
        rights_holder
        rights_statement
        source
        start_date
        subject
        thumbnail_path
        title
        visibility
        collectionmap {
          collectionmap_category
          collection_id
          create_date
          id
          map_object
          modified_date
          createdAt
          updatedAt
          collectionmapCollectionId
        }
        archives {
          nextToken
        }
        createdAt
        updatedAt
        collectionCollectionmapId
      }
      createdAt
      updatedAt
      collectionmapCollectionId
    }
  }
`;
export const onUpdateCollectionmap = /* GraphQL */ `
  subscription OnUpdateCollectionmap(
    $filter: ModelSubscriptionCollectionmapFilterInput
  ) {
    onUpdateCollectionmap(filter: $filter) {
      collectionmap_category
      collection_id
      create_date
      id
      map_object
      modified_date
      collection {
        belongs_to
        bibliographic_citation
        circa
        collection_category
        collectionmap_id
        collectionOptions
        create_date
        creator
        custom_key
        description
        display_date
        end_date
        explicit_content
        heirarchy_path
        id
        identifier
        language
        location
        modified_date
        ownerinfo
        parent_collection
        provenance
        related_url
        rights_holder
        rights_statement
        source
        start_date
        subject
        thumbnail_path
        title
        visibility
        collectionmap {
          collectionmap_category
          collection_id
          create_date
          id
          map_object
          modified_date
          createdAt
          updatedAt
          collectionmapCollectionId
        }
        archives {
          nextToken
        }
        createdAt
        updatedAt
        collectionCollectionmapId
      }
      createdAt
      updatedAt
      collectionmapCollectionId
    }
  }
`;
export const onDeleteCollectionmap = /* GraphQL */ `
  subscription OnDeleteCollectionmap(
    $filter: ModelSubscriptionCollectionmapFilterInput
  ) {
    onDeleteCollectionmap(filter: $filter) {
      collectionmap_category
      collection_id
      create_date
      id
      map_object
      modified_date
      collection {
        belongs_to
        bibliographic_citation
        circa
        collection_category
        collectionmap_id
        collectionOptions
        create_date
        creator
        custom_key
        description
        display_date
        end_date
        explicit_content
        heirarchy_path
        id
        identifier
        language
        location
        modified_date
        ownerinfo
        parent_collection
        provenance
        related_url
        rights_holder
        rights_statement
        source
        start_date
        subject
        thumbnail_path
        title
        visibility
        collectionmap {
          collectionmap_category
          collection_id
          create_date
          id
          map_object
          modified_date
          createdAt
          updatedAt
          collectionmapCollectionId
        }
        archives {
          nextToken
        }
        createdAt
        updatedAt
        collectionCollectionmapId
      }
      createdAt
      updatedAt
      collectionmapCollectionId
    }
  }
`;
export const onCreateArchive = /* GraphQL */ `
  subscription OnCreateArchive($filter: ModelSubscriptionArchiveFilterInput) {
    onCreateArchive(filter: $filter) {
      alternative
      archiveOptions
      basis_of_record
      belongs_to
      bibliographic_citation
      circa
      conforms_to
      contributor
      coverage
      create_date
      created
      creator
      custom_key
      date
      description
      display_date
      end_date
      explicit
      extent
      format
      has_format
      has_part
      has_version
      heirarchy_path
      id
      identifier
      is_format_of
      is_version_of
      item_category
      language
      license
      location
      manifest_file_characterization
      manifest_url
      medium
      modified_date
      other_identifier
      parent_collection
      provenance
      publisher
      reference
      related_url
      repository
      resource_type
      rights_holder
      rights_statement
      source
      start_date
      subject
      tags
      temporal
      thumbnail_path
      title
      visibility
      collection {
        belongs_to
        bibliographic_citation
        circa
        collection_category
        collectionmap_id
        collectionOptions
        create_date
        creator
        custom_key
        description
        display_date
        end_date
        explicit_content
        heirarchy_path
        id
        identifier
        language
        location
        modified_date
        ownerinfo
        parent_collection
        provenance
        related_url
        rights_holder
        rights_statement
        source
        start_date
        subject
        thumbnail_path
        title
        visibility
        collectionmap {
          collectionmap_category
          collection_id
          create_date
          id
          map_object
          modified_date
          createdAt
          updatedAt
          collectionmapCollectionId
        }
        archives {
          nextToken
        }
        createdAt
        updatedAt
        collectionCollectionmapId
      }
      createdAt
      updatedAt
      collectionArchivesId
      archiveCollectionId
    }
  }
`;
export const onUpdateArchive = /* GraphQL */ `
  subscription OnUpdateArchive($filter: ModelSubscriptionArchiveFilterInput) {
    onUpdateArchive(filter: $filter) {
      alternative
      archiveOptions
      basis_of_record
      belongs_to
      bibliographic_citation
      circa
      conforms_to
      contributor
      coverage
      create_date
      created
      creator
      custom_key
      date
      description
      display_date
      end_date
      explicit
      extent
      format
      has_format
      has_part
      has_version
      heirarchy_path
      id
      identifier
      is_format_of
      is_version_of
      item_category
      language
      license
      location
      manifest_file_characterization
      manifest_url
      medium
      modified_date
      other_identifier
      parent_collection
      provenance
      publisher
      reference
      related_url
      repository
      resource_type
      rights_holder
      rights_statement
      source
      start_date
      subject
      tags
      temporal
      thumbnail_path
      title
      visibility
      collection {
        belongs_to
        bibliographic_citation
        circa
        collection_category
        collectionmap_id
        collectionOptions
        create_date
        creator
        custom_key
        description
        display_date
        end_date
        explicit_content
        heirarchy_path
        id
        identifier
        language
        location
        modified_date
        ownerinfo
        parent_collection
        provenance
        related_url
        rights_holder
        rights_statement
        source
        start_date
        subject
        thumbnail_path
        title
        visibility
        collectionmap {
          collectionmap_category
          collection_id
          create_date
          id
          map_object
          modified_date
          createdAt
          updatedAt
          collectionmapCollectionId
        }
        archives {
          nextToken
        }
        createdAt
        updatedAt
        collectionCollectionmapId
      }
      createdAt
      updatedAt
      collectionArchivesId
      archiveCollectionId
    }
  }
`;
export const onDeleteArchive = /* GraphQL */ `
  subscription OnDeleteArchive($filter: ModelSubscriptionArchiveFilterInput) {
    onDeleteArchive(filter: $filter) {
      alternative
      archiveOptions
      basis_of_record
      belongs_to
      bibliographic_citation
      circa
      conforms_to
      contributor
      coverage
      create_date
      created
      creator
      custom_key
      date
      description
      display_date
      end_date
      explicit
      extent
      format
      has_format
      has_part
      has_version
      heirarchy_path
      id
      identifier
      is_format_of
      is_version_of
      item_category
      language
      license
      location
      manifest_file_characterization
      manifest_url
      medium
      modified_date
      other_identifier
      parent_collection
      provenance
      publisher
      reference
      related_url
      repository
      resource_type
      rights_holder
      rights_statement
      source
      start_date
      subject
      tags
      temporal
      thumbnail_path
      title
      visibility
      collection {
        belongs_to
        bibliographic_citation
        circa
        collection_category
        collectionmap_id
        collectionOptions
        create_date
        creator
        custom_key
        description
        display_date
        end_date
        explicit_content
        heirarchy_path
        id
        identifier
        language
        location
        modified_date
        ownerinfo
        parent_collection
        provenance
        related_url
        rights_holder
        rights_statement
        source
        start_date
        subject
        thumbnail_path
        title
        visibility
        collectionmap {
          collectionmap_category
          collection_id
          create_date
          id
          map_object
          modified_date
          createdAt
          updatedAt
          collectionmapCollectionId
        }
        archives {
          nextToken
        }
        createdAt
        updatedAt
        collectionCollectionmapId
      }
      createdAt
      updatedAt
      collectionArchivesId
      archiveCollectionId
    }
  }
`;
export const onCreateEmbargo = /* GraphQL */ `
  subscription OnCreateEmbargo($filter: ModelSubscriptionEmbargoFilterInput) {
    onCreateEmbargo(filter: $filter) {
      id
      identifier
      start_date
      end_date
      note
      record_type
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateEmbargo = /* GraphQL */ `
  subscription OnUpdateEmbargo($filter: ModelSubscriptionEmbargoFilterInput) {
    onUpdateEmbargo(filter: $filter) {
      id
      identifier
      start_date
      end_date
      note
      record_type
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteEmbargo = /* GraphQL */ `
  subscription OnDeleteEmbargo($filter: ModelSubscriptionEmbargoFilterInput) {
    onDeleteEmbargo(filter: $filter) {
      id
      identifier
      start_date
      end_date
      note
      record_type
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSite = /* GraphQL */ `
  subscription OnCreateSite($filter: ModelSubscriptionSiteFilterInput) {
    onCreateSite(filter: $filter) {
      analyticsID
      assetBasePath
      browseCollections
      contact
      displayedAttributes
      groups
      homePage
      id
      lang
      miradorOptions
      searchPage
      siteColor
      siteId
      siteName
      siteOptions
      sitePages
      siteTitle
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSite = /* GraphQL */ `
  subscription OnUpdateSite($filter: ModelSubscriptionSiteFilterInput) {
    onUpdateSite(filter: $filter) {
      analyticsID
      assetBasePath
      browseCollections
      contact
      displayedAttributes
      groups
      homePage
      id
      lang
      miradorOptions
      searchPage
      siteColor
      siteId
      siteName
      siteOptions
      sitePages
      siteTitle
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSite = /* GraphQL */ `
  subscription OnDeleteSite($filter: ModelSubscriptionSiteFilterInput) {
    onDeleteSite(filter: $filter) {
      analyticsID
      assetBasePath
      browseCollections
      contact
      displayedAttributes
      groups
      homePage
      id
      lang
      miradorOptions
      searchPage
      siteColor
      siteId
      siteName
      siteOptions
      sitePages
      siteTitle
      createdAt
      updatedAt
    }
  }
`;
export const onCreateHistory = /* GraphQL */ `
  subscription OnCreateHistory($filter: ModelSubscriptionHistoryFilterInput) {
    onCreateHistory(filter: $filter) {
      event
      groups
      id
      siteID
      userEmail
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateHistory = /* GraphQL */ `
  subscription OnUpdateHistory($filter: ModelSubscriptionHistoryFilterInput) {
    onUpdateHistory(filter: $filter) {
      event
      groups
      id
      siteID
      userEmail
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteHistory = /* GraphQL */ `
  subscription OnDeleteHistory($filter: ModelSubscriptionHistoryFilterInput) {
    onDeleteHistory(filter: $filter) {
      event
      groups
      id
      siteID
      userEmail
      createdAt
      updatedAt
    }
  }
`;
