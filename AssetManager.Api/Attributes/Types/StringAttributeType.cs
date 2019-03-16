﻿//
//          Copyright Seth Hendrick 2019.
// Distributed under the Boost Software License, Version 1.0.
//    (See accompanying file LICENSE_1_0.txt or copy at
//          http://www.boost.org/LICENSE_1_0.txt)
//

namespace AssetManager.Api.Attributes.Types
{
    public class StringAttributeType : BaseAttributeType
    {
        // ---------------- Constructor ----------------

        public StringAttributeType() :
            base( AttributeTypes.StringAttribute )
        {
        }

        // ---------------- Functions ----------------

        protected override bool ValidateInternal( out string errors )
        {
            // Nothing to validate.
            errors = string.Empty;
            return true;
        }
    }
}