﻿//
//          Copyright Seth Hendrick 2019.
// Distributed under the Boost Software License, Version 1.0.
//    (See accompanying file LICENSE_1_0.txt or copy at
//          http://www.boost.org/LICENSE_1_0.txt)
//

// ---------------- Main Class ----------------

enum AttributeType {
    StringAttribute,
    IntegerAttribute,
    AssetNameAttribute
}

class AssetTypeMaker {

    // ---------------- Fields ----------------

    private readonly appDiv: HTMLDivElement;

    private readonly attrList: Array<IAttributeType>;

    // ---------------- Constructor ----------------

    constructor() {
        this.appDiv = document.getElementById("app") as HTMLDivElement;
        this.attrList = new Array<IAttributeType>();
    }

    // ---------------- Functions ----------------

    public AddAttribute(attrType: AttributeType): void {

        var attr: IAttributeType = undefined;

        switch (attrType) {
            case AttributeType.IntegerAttribute:
                attr = new IntegerAttributeType();
                break;
            case AttributeType.StringAttribute:
                attr = new StringAttributeType();
                break;
            case AttributeType.AssetNameAttribute:
                attr = new AssetNameAttributeType();
                break;
        }

        if (attr !== undefined) {
            this.attrList.push(attr);
            this.appDiv.appendChild(attr.GetHtmlDiv());

            if (attrType !== AttributeType.AssetNameAttribute) {
                let maker = this;
                attr.OnDelete = function (theAttr: IAttributeType) {
                    maker.appDiv.removeChild(theAttr.GetHtmlDiv());

                    // Holy crap, typescript doesn't have a REMOVE function for an array!?
                    const index = maker.attrList.indexOf(theAttr);
                    if (index > -1) {
                        maker.attrList.splice(index, 1);
                    }
                };
            }
        }
    }

    public Validate(): boolean {
        var success: boolean = true;
        for (let attr of this.attrList) {
            if (attr.Validate() === false) {
                success = false;
            }
        }

        return success;
    }

    public Submit(): void {
        if (this.Validate() === false) {
            // Do nothing yet...
        }
    }
}