using Aqnkla.Domain.Base.Repository;
using Aqnkla.Domain.Key.Service;
using Aqnkla.Domain.Language.Model;
using Aqnkla.Food.Ingredient.Entity.Category;
using Aqnkla.Food.Ingredient.Repository;
using Aqnkla.Food.Ingredient.Service;
using Aqnkla.Service.Base;

namespace Aqnkla.Food.Service.Ingredient.Category
{
    public class IngredientCategoryService<TKey>
        : BaseViewService<IngredientCategoryEntity<TKey>, IngredientCategoryViewModel, TKey>, IIngredientCategoryService<TKey>
    {
        private readonly IKeyService<TKey> keyService;

        public IngredientCategoryService(
            IIngredientCategoryRepository<TKey> repository,
            IKeyService<TKey> keyService) : base(repository)
        {
            this.keyService = keyService;
        }

        public override IngredientCategoryEntity<TKey> MapToEntity(IngredientCategoryViewModel vievModel)
        {
            return new IngredientCategoryEntity<TKey>
            {
                Id = keyService.ParseKey(vievModel.Id),
                Name = vievModel.Name,
                Description = vievModel.Description,
                ParentCategoryId = keyService.ParseKey(vievModel.ParentCategoryId)
            };
        }

        public override IngredientCategoryViewModel MapToViewModel(IngredientCategoryEntity<TKey> entity, LanguageValue language)
        {
            return new IngredientCategoryViewModel
            {
                Id = keyService.GetKeyString(entity.Id),
                Name = entity.Name,
                Description = entity.Description,
                ParentCategoryId = keyService.GetKeyString(entity.ParentCategoryId)
            };
        }
    }
}
