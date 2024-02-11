import './App.css';
import omelete from '../src/recipe-page-main/assets/images/omelete.jpeg'

function App() {
  return (
    <>
      <div className='container pt-5 ' >
        <div class=" wholec card my-5 mx-auto" style={{ borderRadius: "23px", padding: "23px", width: "700px", height: "auto" }}>
          <div className='pt-4 mx-auto px-2'  >
         
            <img src={omelete} class=" image mx-auto d-block " alt="img" style={{ height: "325px", borderRadius: "24px", width: "630px" }} />
           
            <div class="card-body my-4">
              <h5 class="card-title">Simple omelette recipe</h5>
              <p class="card-text">An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked
                to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
            </div>
            <div className=' my-4' style={{ backgroundColor: "hsl(330, 100%, 98%)" }}>
              <span className='px-2' style={{ color: "hsl(332, 51%, 32%)", }}>
                <b className='' style={{ fontSize: "15px" }} >Preparation time </b>
                <div className='my-2' style={{ color: "hsl(30, 10%, 34%)", fontSize: "12px  " }}>
                  <ul >
                    <li><b>Total:</b> Approximately 10 minutes</li>
                    <li><b>preparation:</b> 5 minutes</li>
                    <li><b>cooking:</b> 5 minutes</li>
                  </ul>
                </div>
              </span>
            </div>
            <div className='my-4'>
              <span > <b className='' style={{ fontFamily: "Outfit", fontSize: "23px", color: " hsl(14, 45%, 36%)" }}>Ingredients</b>
                <div className='my-2' style={{ fontSize: "14px" }} >
                  <ul>
                    <li>2-3 large eggs</li>
                    <li>Salt, to taste</li>
                    <li>Pepper, to taste</li>
                    <li>1 tablespoon of butter or oil</li>
                    <li> Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
                  </ul>
                </div>
              </span>
            </div>
            <hr />
            <div className='my-4'>
              <span style={{ color: " hsl(14, 45%, 36%)" }}> <b className='' style={{ fontFamily: "Outfit", fontSize: "23px", color: " hsl(14, 45%, 36%)" }}>Instructions</b>
                <div className='my-2' style={{ color: " hsl(24, 5%, 18%)", fontSize: "12px" }}>
                  <ol>
                    <li><b>Beat the eggs:</b> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.</li>
                    <li><b>Heat the pan:</b> Place a non-stick frying pan over medium heat and add butter or oil.</li>
                    <li><b>Cook the omelette:</b> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.</li>
                    <li><b> Add fillings (optional):</b> When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.</li>
                    <li><b> Fold and serve:</b> As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.</li>
                    <li><b>Enjoy:</b> Serve hot, with additional salt and pepper if needed.</li>
                  </ol>
                </div>
              </span>
            </div>
            <hr />
            <div className=' container my-4'>
              <span  style={{ color: " hsl(14, 45%, 36%)",fontSize: "23px"  }}> <b>Nutrition</b>
              </span>
              <div className='my-2' style={{ color: "hsl(24, 5%, 18%)" }}>
                <p>The table below shows nutritional values per serving without the additional fillings.</p>
              </div>

              <table style={{ width: '100%', marginLeft:"30px" , fontSize:"12px"}}>
                <tr>
                  <td style={{color:"hsl(30, 10%, 34%)"}}>Calories</td>
                  <td><b style={{color: " hsl(14, 45%, 36%)"}}>277kcal</b></td>
                </tr>

                <tr >
                  <td style={{color:"hsl(30, 10%, 34%)"}}>Carbs</td>
                  <td><b style={{color: " hsl(14, 45%, 36%)"}}>0g</b></td>
                </tr>
                <tr >
                  <td style={{color:"hsl(30, 10%, 34%)"}}> Protein</td>
                  <td><b style={{color: " hsl(14, 45%, 36%)"}}>20g</b></td>
                </tr>
                <tr>
                  <td style={{color:"hsl(30, 10%, 34%)"}}>Fat</td>
                  <td><b style={{color: " hsl(14, 45%, 36%)"}}>22g</b></td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
