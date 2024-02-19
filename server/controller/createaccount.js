const accountDetails = require("./userschema");


const newaccount = async (req, res) => {
    const {
        holdername,
        accountnumber,
        dob,
        identificationType,
        gender,
        savings,
        documents
    } = req.body;

    try {
        // Create a new account document
        const newUser = await  accountDetails.create({
            holdername,
            accountnumber,
            dob,
            identificationType,
            gender,
            savings: {
                atm: savings.atm || false,
                checkbook: savings.checkbook || false,
                onlinebanking: savings.onlinebanking || false
            },
            documents: {
                photo: documents.photo || null,
                idproof: documents.idproof || null
            }
        });

        res.json(newUser);
    } catch (error) {
        res.status(500).json({ error: "Error creating user" });
    }
};

module.exports = newaccount;
