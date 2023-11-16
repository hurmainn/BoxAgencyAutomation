import { GetAQuoteForm } from "./Pages/GetAQuoteFormClass"

describe('Get A Quote Form All Tests', () => {
    const getAQuoteForm = new GetAQuoteForm()

    beforeEach(function () {
        console.log('asfsdd')
        //cy.visit('https://boxagency.co/')
    })
    it('Valid Inputs', () => {
        getAQuoteForm.visitWebsite()
        getAQuoteForm.navigateToForm()
        // getAQuoteForm.fullname = 'Hurmain Javaid'
        // getAQuoteForm.ph = '03218653007'
        // getAQuoteForm.email = 'hurmain.javed@folium.ai'
        // getAQuoteForm.company = 'FoliumAI'
        // getAQuoteForm.paperType = 'Cardboard'
        // getAQuoteForm.colorStyle = '2 Side Printing'
        // getAQuoteForm.quantity = '2300'
        // getAQuoteForm.size = '4*5*3'
        // getAQuoteForm.unit = 'in'
        // getAQuoteForm.productInfo = 'A custom box with sharp edged corners'
        console.log('asdbsajkas');

        getAQuoteForm.inputName("Hurmain");
        cy.wait(50000);
    }
    )
    
})