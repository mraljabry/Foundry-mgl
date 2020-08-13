import Dnd5eConverter from "./Dnd5eConverter";
import ConversionEngine from "./ConversionEngine";

class MetricModule {
    private static _instance: MetricModule;

    private constructor() {
    }

    public static getInstance(): MetricModule {
        if (!MetricModule._instance) MetricModule._instance = new MetricModule();
        return MetricModule._instance;
    }

    static addButton(element, actor) {
        // Can't find it?
        if (element.length != 1) {
            return;
        }
        let button = $(`<a class="popout" style><i class="fas fa-ruler"></i>${game.i18n.localize("Metrificator")}</a>`);
        button.on('click', (event) => Dnd5eConverter.updater(actor));
        //button.on('click', (event) => ConversionEngine.updateItem(actor));
        element.after(button);
    }

    public onRenderActorSheet(obj, html) {
        let element = html.find(".window-header .window-title")
        MetricModule.addButton(element, obj);

    }


}

export default MetricModule.getInstance();