﻿//
//          Copyright Seth Hendrick 2019.
// Distributed under the Boost Software License, Version 1.0.
//    (See accompanying file LICENSE_1_0.txt or copy at
//          http://www.boost.org/LICENSE_1_0.txt)
//

using System;
using System.Collections.Generic;
using System.Text;

namespace AssetManager.Api
{
    /// <summary>
    /// This class aides in building an Asset Type.
    /// </summary>
    public class AssetTypeBuilder
    {
        // ---------------- Fields ----------------

        internal const string UnknownType = "Unknown Asset";

        private string name;

        // ---------------- Constructor ----------------

        public AssetTypeBuilder( string assetName )
        {
            this.Name = assetName;
            this.KeyValueAttributeKeys = new List<AttributeBuilder>();
        }

        // ---------------- Properties ----------------

        /// <summary>
        /// The name of the specific asset instance.
        /// </summary>
        public string Name
        {
            get
            {
                return this.name;
            }
            set
            {
                if( string.IsNullOrWhiteSpace( value ) )
                {
                    throw new ArgumentException( nameof( Name ) + " can not be null, empty, or whitespace." );
                }
                this.name = value;
            }
        }

        public IList<AttributeBuilder> KeyValueAttributeKeys { get; private set; }

        // ---------------- Functions ----------------
    }
}
