export default [
  {
    name: "{nui.menu.librarycard}",
    description: "Go to {nui.menu.librarycard}",
    action: "{urls.eshelf}/account",
    icon: {
      set: "social",
      icon: "ic_person_outline_24px"
    }
  },
  {
    name: "E-Z Borrow",
    description: "Go to E-Z Borrow",
    action: "{urls.ezborrow}",
    icon: {
      set: "social",
      icon: "ic_share_24px"
    }
  },
  {
    name: "Interlibrary Loan",
    description: "Go to Interlibrary Loan (ILL)",
    action: "{urls.ill}",
    icon: {
      set: "content",
      icon: "ic_send_24px"
    }
  }
]
