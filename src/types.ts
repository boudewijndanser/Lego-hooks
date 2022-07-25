export type User = {
    kind: 'loggedIn'
    username: string
    password: string
    hash: string
    apiKey: string
} | {
    kind: 'loggedOut'
    username?: string
    password?: string
    apiKey?: string
    }

export type Form = {
    username: string
    password: string
    apiKey: string
}

export type Theme = {
    theme: string
    setCount: number
    subThemeCount: number
    yearFrom: number
    yearTo: number
}

export type ThemeApiResponse =  {
    status: "success" // Add other status options
    "matches": number
    "themes": Theme[]
}

export type UserLoginResponse = {
    status: 'success'
    hash: string
} | {
    status: 'error'
    Message: 'string'
}

export type Set = {
      setID: number
      number: string
      numberVariant: number
      name: string
      year: number
      theme: string // Type this properly
      themeGroup: string // This too
      subtheme?: string // and this
      category?: string
      released: true
      pieces: number
      minifigs?: number
      image: Image
      bricksetURL: string
      collection: Collection
      collections: Collections
      LEGOCom: LEGOCom
      rating: number
      reviewCount: number
      packagingType: 'Box' | 'Shrink-wrapped' | '{Not specified}' | 'Polybag'
      availability: 'Retail' | 'Retail - limited' | 'LEGO exclusive' | '{Not specified}'
      instructionsCount: number
      additionalImageCount: number
      ageRange: AgeRange
      dimensions: Dimensions
      barcode: Barcode
      extendedData?: {}
      lastUpdated: string

}

export type Image = {
    thumbnailURL: string
    imageURL: string
}

export type Collection = {
    owned: boolean
    wanted: boolean
    qtyOwned: number
    rating: number
    notes: string
}

export type Collections = {
    ownedBy: number
    wantedBy: number
}

export type LEGOCom = {
    US: Details
    UK: Details
    CA: Details
    DE: Details
}


export type Details = {
    retailPrice?: number
    dateFirstAvailable?: string
    dateLastAvailable?: string
}

export type AgeRange = {
    min?: number
    max?: number
}

export type Dimensions = {
    height?: number
    width?: number
    depth?: number
    weight?: number
}

export type Barcode = {
    EAN?: string
    UPC?: string
}