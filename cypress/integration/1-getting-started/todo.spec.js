/// <reference types="cypress" />
import { parse } from "date-fns"

describe("Date list should", () => {
  it("have dates sorted chronologically", () => {
    cy.viewport(1366,766); 
    cy.visit("https://www.tesourodireto.com.br/")
    cy.get(':nth-child(6) > .td-nav__list-item__link').click()
    const parseDate = date => parse(date, "dd/MM/yyyy", new Date())
    let prevDate = parseDate("28/10/2021")

    cy.get("span.td-noticias-item__date-time__date").each($pre => {
      const currentDate = parseDate($pre.text())
      expect(prevDate).to.be.gte(currentDate)

      prevDate = currentDate
    })
  })
  })

 

