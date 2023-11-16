//import { recurse } from "../../support/recursionUtils";
export class GetAQuoteForm {

    i = 0
    fullname = ''
    ph = ''
    email = ''
    company = ''
    paperType = ''
    colorStyle = ''
    quantity = ''
    size = ''
    unit = ''
    productInfo = ''

    getAQuoteButton = '/html/body/header/section[2]/div/div/div[2]/div[2]/a'
    fullName_textBox = '//*[@id="wpcf7-f2270-o1"]/form/div[2]/span/input'
    phoneNumber_textBox = '//*[@id="wpcf7-f2270-o1"]/form/div[2]/div/span[1]/input'
    email_textBox = '//*[@id="wpcf7-f2270-o1"]/form/div[3]/span[1]/input'
    company_textBox = '//*[@id="wpcf7-f2270-o1"]/form/div[3]/span[2]/input'
    paperType_dropDown = '//*[@id="main-custom-select"]'
    colorStyle_dropDown = '//*[@id="main-custom-select"]'
    quantity_textBox = '//*[@id="quantity"]'
    size_textBox = '//*[@id="wpcf7-f2270-o1"]/form/div[5]/div[2]/span/input'
    unit_dropDown = '//*[@id="wpcf7-f2270-o1"]/form/div[5]/div[3]/div[1]'
    productInfo_textBox = '//*[@id="wpcf7-f2270-o1"]/form/div[6]/span/textarea'

    captcha_textBox = '//*[@id="f12_captcha-978"]'

    sendButton = '//*[@id="wpcf7-f2270-o1"]/form/div[7]/input'



    inputName(fullname) {
        // Use the xpath function to get the element and type with force option
        cy.xpath(this.fullName_textBox).type(fullname, { force: true });

        cy.log('printed');
    }

    inputPhoneNumber(ph) {
        cy.xpath(this.phoneNumber_textBox)
            .type(this.ph)
            .should('have.value', this.ph);
        cy.wait(2000)
    }

    inputEmail(email) {
        cy.xpath(this.email_textBox)
            .type(this.email)
            .should('have.value', this.email);
    }
    inputCompanyName(company) {
        cy.xpath(this.company_textBox)
            .type(this.company)
            .should('have.value', this.company);
    }
    choosePaperType(paperType) {
        cy.xpath(this.paperType_dropDown).click()
        cy.get('.custom-dropdown.flex-48').eq(0).invoke('show') //eq(0) -selects the first matching dropdown
        cy.contains(this.paperType).click()

    }
    chooseColorStyle(colorStyle) {
        cy.xpath(this.colorStyle_dropDown).click()
        cy.get('.custom-dropdown.flex-48').eq(1).invoke('show') //eq(1) -selects the 2nd matching dropdown
        cy.contains(this.colorStyle).click()

    }
    inputQuantity(quantity) {
        cy.xpath(this.quantity_textBox)
            .type(this.quantity)
            .should('have.value', this.quantity);
    }

    inputSize(size) {
        cy.xpath(this.size_textBox)
            .type(this.size)
            .should('have.value', this.size);
    }

    chooseUnit(unit) {
        cy.xpath(this.unit_dropDown).click()

        cy.get('li#mega-menu-item-3073').invoke('css', 'visibility', 'visible');
        cy.get(':nth-child(7) > .dropdown-group > .custom-dropdown > ul').contains(this.unit).click()


    }

    inputProductInfo(productInfo) {
        cy.xpath(this.productInfo_textBox)
            .type(this.productInfo)
            .should('have.value', this.productInfo);
    }

    fillCaptcha() {
        cy.pause()
    }

    visitWebsite() {
        cy.visit('https://boxagency.co/')
    }
    navigateToForm() {
        //cy.xpath(this.getAQuoteButton).click()
        cy.visit('https://boxagency.co/get-a-quote/')
        cy.wait(3000);
        // cy.wait(1000);
        cy.scrollTo('bottom')

    }

    filltheForm() {
        console.log(fullname);

        this.inputName(fullname);
        cy.wait(1000);


        // this.inputPhoneNumber(this.ph)
        // this.inputEmail(this.email)
        // this.inputCompanyName(this.company)
        // this.choosePaperType(this.paperType)
        // this.chooseColorStyle(this.colorStyle)
        // this.inputQuantity(this.quantity)
        // this.inputSize(this.size)
        // this.chooseUnit(this.unit)
        // this.inputProductInfo(this.productInfo)

        // cy.xpath(this.sendButton).click()
    }

    submitForm() {
        cy.xpath(this.sendButton).click()
    }
}