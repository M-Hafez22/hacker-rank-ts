import balancedSums from "./balancedSums"

describe("balancedSums", () => {
  it("should return NO for array with balanced sum at start", () => {
    expect(balancedSums([1, 2, 3])).toBe("NO")
  })

  it("Case", () => {
    expect(balancedSums([1, 2, 3, 3])).toBe("YES")
  })
  it("Case 5 - 1", () => {
    expect(balancedSums([1, 2, 3])).toBe("NO")
  })
  it("Case 5 - 2", () => {
    expect(balancedSums([1, 2, 3, 3])).toBe("YES")
  })
  it("Case 7 - 1", () => {
    expect(balancedSums([1, 1, 4, 1, 1])).toBe("YES")
  })
  it("Case 7 - 2", () => {
    expect(balancedSums([2, 0, 0, 0])).toBe("YES")
  })
  it("Case 7 - 3", () => {
    expect(balancedSums([0, 0, 2, 0])).toBe("YES")
  })
})
