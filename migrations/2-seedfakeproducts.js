import IoC from 'AppIoC';
import 'server/bootstrap';

export const id = "seedFakeProducts";

export const up = async function (done) {
  const productModel = await IoC.resolve('productModel');
  const superUser = await IoC.resolve('superUser')

  // Run super user seeder to create super user in database
  // This is expected to fail if super user already exists
  try {
    await productModel.create([
      { name: 'NikeLab Air Max Plus', slug: 'nikelab-air-max-plus', creator: superUser._id },
      { name: 'Sassafras Exterminator Tee', slug: 'sassafras-exterminator-tee', creator: superUser._id },
      { name: 'Norse Projects Ripstop Tote Bag', slug: 'norse-projects-ripstop-tote-bag', creator: superUser._id },
      { name: 'Saint Laurent Blood Luster Tee', slug: 'saint-laurent-blood-luster-tee', creator: superUser._id },
      { name: 'Le Cord Solid Gold Braided 2m ', slug: 'le-cord-solid-gold-braided-2m', creator: superUser._id },
      { name: 'Grenson x William Green Wax Kit', slug: 'grenson-x-william-green-wax-kit', creator: superUser._id },
    ]);
    done();
  } catch(err) {
    done(err);
  }
};

export const down = async function (done) {
};
