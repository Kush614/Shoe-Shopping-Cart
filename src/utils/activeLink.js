export const activeLinkHandler = ({isActive}) => ({
    color: isActive ? "var(--primary-color)" : "#201e28e5",
    fontWeight: isActive ? "700" : "500"
  })