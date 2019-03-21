const {Router} = require('express')
const router = Router();
const stripe = require('stripe')('sk_test_U9FV0NQiX1zYsv3O8OCrWrU000KtdmUKTj')

router.get('/',(req,res) =>{

	res.render('index')
})

router.post('/checkout',async(req,res)=>{
	//console.log(req.body)
	//res.send('received')
	const customer = await stripe.customers.create({
		email:req.body.stripeEmail,
		source:req.body.stripeToken
	})

	const charge = await stripe.charges.create({
		amout: '3000',
		currency: 'usd',
		customer: customer.id,
		description:'chess'
	});

	console.log(charge.id)
	res.render('download')
})

module.exports = router



